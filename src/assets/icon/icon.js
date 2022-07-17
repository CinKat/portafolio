import IconGithub from "./github";
import IconCodewars from "./codewars";
import IconLinkedln from "./linkedln";
import IconCodepen from "./codepen";

const Icon = ({ name }) => {
  switch (name) {
    case 'Codepen':
      return <IconCodepen width="38" height="38" />;
    case 'Github':
      return <IconGithub width="38" height="38" />;
    case 'Linkedln':
      return <IconLinkedln width="38" height="38" />;
    case 'Codewars':
      return <IconCodewars width="38" height="38" />;
    default:
      return "";
  }
};

export default Icon;