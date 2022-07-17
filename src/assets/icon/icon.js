import IconGithub from "./github";
import IconInstagram from "./instagram";
import IconLinkedln from "./linkedln";
import IconTwitter from "./twiter";

const Icon = ({ name }) => {
  switch (name) {
    case 'Twitter':
      return <IconTwitter width="38" height="38" />;
    case 'Github':
      return <IconGithub width="38" height="38" />;
    case 'Linkedln':
      return <IconLinkedln width="38" height="38" />;
    case 'Instagram':
      return <IconInstagram width="38" height="38" />;
    default:
      return "";
  }
};

export default Icon;