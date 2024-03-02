import { navLinkTitlesAndLinks } from "../utils/componentsConfig.js";

import NavigationLink from './NavigationLink.js';
import style from './NavigationCard.module.css';

const NavigationCard = (props) => {

    return (
            <ul className={style.navlist}>
                {Object.keys(navLinkTitlesAndLinks).map(title => <NavigationLink key={title} linkName={title} url={navLinkTitlesAndLinks[title]}></NavigationLink>)}
            </ul>
    );

}

export default NavigationCard;