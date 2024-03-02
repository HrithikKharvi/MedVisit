import style from './ChartHeader.module.css';

const ChartHeader = (props) => {
    return (<div className={style.charHeader}>
        <div className={style.datechanger} onClick={props.decrement}>{"<"}</div>
        <div className={style.datechanger} onClick={props.incrementDate}>{">"}</div>
        <div>{props.fromDate.toLocaleDateString()}</div> - 
        <div>{props.toDate.toLocaleDateString()}</div>
    </div>)
}

export default ChartHeader;