import { useFormStatus } from "react-dom";
import { MailSuccess } from "./InputSuccessComponent";

export const Submit = ({ success }: { success: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <>
      {success ? <MailSuccess /> : <></>}
      <button className="text-preset-6" type="submit" disabled={pending}>
        {pending ? "Loading..." : "Stay updated"}
      </button>
    </>
  );
};
