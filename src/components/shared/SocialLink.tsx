import { FC } from "react";
import { LogoGithub, LogoLinkedin, LogoMentor, LogoX } from "@/utils/svglist";

interface SocialLinkProps {
  className: string;
  width: number;
  height: number;
}

const SocialLink: FC<SocialLinkProps> = ({ className, width, height }) => {
  return (
    <ul className={className}>
      <li>
        <a rel="noreferrer" target="_blank" href="https://x.com/">
          <LogoX width={width} height={height} />
        </a>
      </li>
      <li>
        <a rel="noreferrer" target="_blank" href="https://github.com/DmytroVoitovych">
          <LogoGithub width={width} height={height} />
        </a>
      </li>
      <li>
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/dmytro-voitovych/">
          <LogoLinkedin width={width} height={height} />
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.frontendmentor.io/profile/DmytroVoitovych"
        >
          <LogoMentor width={width} height={height} />
        </a>
      </li>
    </ul>
  );
};

export { SocialLink };
