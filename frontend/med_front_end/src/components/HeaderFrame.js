import style from './HeaderFrame.module.css';

const HeaderFrame = (props) => {
    return (<div className={style.headerFrameContainer}>
        <div className={style.headerFrameTitle}>Appointment Planner</div>
        {props.children}
    </div>);
}

export default HeaderFrame;
