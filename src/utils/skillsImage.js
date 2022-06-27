import estetica from "../assets/svg/skills/estetica.svg"
import ortodontie from "../assets/svg/skills/ortodontie.svg"
import profilaxie from "../assets/svg/skills/profilaxie.svg"
import implantologie from "../assets/svg/skills/implantologie.svg"
import carii from "../assets/svg/skills/carii.svg"
import chirurgie from "../assets/svg/skills/chirurgie.svg"
import endodontie from "../assets/svg/skills/endodontie.svg"
import radiologie from "../assets/svg/skills/radiologie.svg"


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'estetica dentara':
            return estetica;
        case 'ortodontie':
            return ortodontie;
        case 'chirurgie orala':
            return chirurgie;
        case 'profilaxie':
            return profilaxie;
        case 'endodontie':
            return endodontie;
        case 'implantologie':
            return implantologie;
        case 'radiologie':
            return radiologie;
        case 'tratarea cariilor':
            return carii;
        default:
            break;
    }
}
