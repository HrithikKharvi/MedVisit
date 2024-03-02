import style from './TableCell.module.css';

let colors = [
    "#0dad22","#1d0dad","#e135f1","#3558f1","#be1e1e","#abc710","#5dbbf1","#ffa500"
]

const TableCell = (props) => {
    let color = Math.floor(Math.random() * 7);
    return (
        <td className={style.tableCell} style={{backgroundColor: (props.data ? colors[color] : undefined)}}>
             {props.data ? props.data : ""}
        </td>
    )
}

export default TableCell;