import TableRow from './TableRow.js';
import TableCell from './TableCell.js';
import style from './ChartBody.module.css';

const ChartBody = (props) => {
    let tableHeader = [];
    let tableBody = [];

    props.appointment.map((data, i) => {
        if (i == 0) {
            tableHeader.push(
                <tr key={i}>
                    {data.map((d, j) => (
                        <th key={i + ":" + j}>{d}</th>
                    ))}
                </tr>
            )
        } else
            tableBody.push(<TableRow key={i}>
                {data.map((d, j) => (

                    <TableCell key={i + ":" + j} data={d}></TableCell>
                ))}
            </TableRow>
            )
    });

    
    return (
        <div className={style.tableContainer}>
            <table>
                <thead>
                    {tableHeader}
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
        </div>
    )
}
export default ChartBody;