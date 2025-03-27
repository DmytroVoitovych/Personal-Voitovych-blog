import { useFormStatus } from "react-dom";
import { MailSuccess } from "./InputSuccessComponent";

export const Submit = ({success}:{success:boolean}) => {
  const { pending,data,action } = useFormStatus();

  console.log(data,action);

  return (
    <>
    {success?<MailSuccess />:<></>}
    <button className="text-preset-6" type="submit" >
      {pending ? "Loading..." : "Stay updated"}
    </button>
    </>
  );
};
