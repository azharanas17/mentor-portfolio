import pandas from '../app/assets/svg/skills/pandas.svg';
import marketingscience from '../app/assets/svg/skills/marketing-science.svg';
import businessstrategic from '../app/assets/svg/skills/business-strategic.svg';
import digitalmarketing from '../app/assets/svg/skills/digital-marketing.svg';
import teamcollaboration from '../app/assets/svg/skills/team-collaboration.svg';
import leadership from '../app/assets/svg/skills/leadership.svg';


export const skillsImage = (skill) => {
  const skillID = skill;
  switch (skillID) {
    case 'Data Science & Analytics':
      return pandas;
    case 'Marketing Science':
      return marketingscience;
    case 'Business Strategic':
      return businessstrategic;
    case 'Digital Marketing':
      return digitalmarketing;
    case 'Team Collaboration':
      return teamcollaboration;
    case 'Leadership':
      return leadership;
    default:
      break;
  }
}
