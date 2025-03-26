import { InformationTip, LogoTip, WarningTip } from "../svglist";

export const NotsLogo = ({ cl }: { cl: string }) => {
  switch (cl) {
    case "tip":
      return <LogoTip />;
    case "warning":
      return <WarningTip />;
    case "information":
      return <InformationTip />;
    default:
      return <></>;
  }
};
