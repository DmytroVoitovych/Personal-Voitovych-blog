import { useFormStatus } from "react-dom";

export const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <button className="text-preset-6" type="submit" >
      {pending ? "Loading..." : "Stay updated"}
    </button>
  );
};
