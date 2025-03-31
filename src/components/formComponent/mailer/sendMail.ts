"use server";
import { transporter } from "./nodemailer";
const { NEXT_PUBLIC_MAIL_FROM } = process.env;
import { render } from "@react-email/render";
import { Email } from "./MailComponent";
import { getDataViaSupabase } from "@/utils/supabase/helper";

export async function renderEmailComponent(): Promise<string> {
  const { data: article } = await (await getDataViaSupabase()).supabase
    .order("publishedAt", { ascending: false })
    .limit(1)
    .single();

  const htmlString = await render(Email(article?.content || "no data"), {
    pretty: true,
  });

  return htmlString;
}

export const sendMail = async (email: string) => {
  try {
    const isVerified = await transporter.verify();
    if (!isVerified) throw new Error("Not verified");

    const h = await renderEmailComponent();
    if (!h) throw new Error("Incorrect html string");

    const data = await transporter.sendMail({
      from: NEXT_PUBLIC_MAIL_FROM,
      to: email,
      subject: "BLOG SUBSCRIBING",
      text: "Hello Guest",
      html: h,
    });

    return data;
  } catch (error) {
    console.error("Something Went Wrong", error);
    return;
  }
};
