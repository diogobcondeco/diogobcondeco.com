import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SocialLinkProps = {
  link: string;
  icon: IconDefinition;
};

const SocialLink = ({ link, icon }: SocialLinkProps) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div onClick={handleClick}>
      <FontAwesomeIcon
        icon={icon}
        className="text-white h-7 sm:h-10 opacity-50 hover:opacity-100 transition-all cursor-pointer"
      />
    </div>
  );
};

export default SocialLink;
