import NavigationCard from '../components/NavigationCard.js';
import ProfilePicture from '../components/ProfilePicture.js';
import style from './Navigation.module.css';

const Navigation = (props) => {
    return (  
        <div className={style.navContainer}>
            <ProfilePicture></ProfilePicture>
            <div>Hrithik</div>
            <div>Admin</div>
            <NavigationCard>
            </NavigationCard>
        </div>
    )
}

export default Navigation;
