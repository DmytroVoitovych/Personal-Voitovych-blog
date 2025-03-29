"use server";
import { transporter } from "./nodemailer";
const { NEXT_MAIL_FROM } = process.env;
import { createClient } from "@/utils/supabase/server";
import { render } from "@react-email/render";
import { Email } from "./MailComponent";

export async function renderEmailComponent(): Promise<string> {
  const supabase = await createClient();
  const { data: article } = await supabase
    .from("Developers articles")
    .select("*")
    .eq("slug", "how-to-create-dynamic-og-images-in-nuxt")
    .maybeSingle();

  

  const htmlString = await render(Email(article?.content || 'no data'), { pretty: true });

  return htmlString;
}

export const sendMail = async (email: string) => {
  try {
    const isVerified = await transporter.verify();
    if (!isVerified) throw new Error("Not verified");

    const h = await renderEmailComponent();

    const data = await transporter.sendMail({
      from: NEXT_MAIL_FROM,
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
