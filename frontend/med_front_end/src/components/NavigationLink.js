import { NavLink } from 'react-router-dom';
import style from './NavigationLink.module.css';

const NavigationLink = (props) => {
    return (
        <li className={style.navBar}>
            <NavLink to={props.url} className={({isActive}) => {
                    return isActive ? style.active : undefined;
                }} end>
                    {props.linkName}
             </NavLink>
        </li>
    );
}

export default NavigationLink;
