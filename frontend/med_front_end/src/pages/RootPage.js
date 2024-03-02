import { Outlet } from 'react-router-dom';
import style from './RootPage.module.css';

import Navigation from './Navigation.js';

const RootPage = () => {
    return (
        <main>
            <Navigation></Navigation>
            <Outlet />
        </main>
    )
}

export default RootPage;
