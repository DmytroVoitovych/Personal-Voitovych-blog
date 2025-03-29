import { IconErr } from "@/utils/svglist";

export const MailError = ({ err }: { err: boolean }) =>
  err ? (
    <p data-err>
      <IconErr />
      Please enter a valid email address.
    </p>
  ) : (
    <></>
  );
