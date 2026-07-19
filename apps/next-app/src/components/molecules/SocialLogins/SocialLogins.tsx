import { Divider } from "@/components/atoms/Divider/Divider";
import { GithubIcon } from "@/components/atoms/icons/GithubIcon";
import { GoogleIcon } from "@/components/atoms/icons/GoogleIcon";
import { SocialButton } from "@/components/molecules/SocialButton/SocialButton";

export interface SocialLoginsProps {
  onGithubClick?: () => void;
  onGoogleClick?: () => void;
}

/**
 * "ou entre com outras contas" divider + provider buttons. Shared as-is by
 * every auth form (login, signup, ...).
 */
export function SocialLogins({ onGithubClick, onGoogleClick }: SocialLoginsProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Divider>ou entre com outras contas</Divider>
      <div className="flex gap-8">
        <SocialButton
          icon={<GithubIcon className="h-5 w-5" />}
          label="Github"
          onClick={onGithubClick}
        />
        <SocialButton
          icon={<GoogleIcon className="h-5 w-5" />}
          label="Gmail"
          onClick={onGoogleClick}
        />
      </div>
    </div>
  );
}
