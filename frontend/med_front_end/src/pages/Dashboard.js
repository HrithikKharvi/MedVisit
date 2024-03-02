import HeaderFrame from '../components/HeaderFrame';
import ChartHeader from '../components/ChartHeader.js';
import ChartBody from '../components/ChartBody.js';
import style from './Dashboard.module.css';

import { useState, useEffect } from 'react';

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month starts from 0
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

const DashBoard = () => {

    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState((new Date((new Date()).getTime() + 6 * 24 * 60 * 60 * 1000)));
    const [data, setData] = useState([]);
    const [appointment, setAppointment] = useState([]);
    let dates = ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM",
                "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM",
                "10 PM", "11 PM"]

    useEffect(() => {
        let daysInWeek = [];
        for (let i = 0; i < 7; i++){
            daysInWeek.push(new Date(fromDate.getTime() + i * 24 * 60 * 60 * 1000))
        }
        changeCalenderData(daysInWeek);
    }, [data])
    
    useEffect(() => {
        // let daysInWeek = [];
        // for (let i = 0; i < 7; i++){
        //     daysInWeek.push(new Date(fromDate.getTime() + i * 24 * 60 * 60 * 1000))
        // }
        // changeCalenderData(daysInWeek);
        // return () =>{}
        makeAPICall();
    }, [fromDate])

    const fetchData = () => {
            fetch(`http://localhost:4500/cintal/doctors/1/appointments?from=${formatDate(fromDate)}&to=${formatDate(toDate)}`, { method: 'GET' })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
    }

    function makeAPICall(){
        fetchData();
    }


    function makeChangesInCalender(data, states, allWeekDates){
        for (let d of data) {
            let dates = d["date"].split("-");
            let day = parseInt(dates[2]);
            let time = d["time"];
            let i = 1;
            let isAm = true;
            
            if (time.includes("PM")) {
                time = time.replace("PM", "");
                isAm = false;
            } else {
                time = time.replace("AM", "");
            }

            time = parseInt(time);
            let j = 0;
            for (let k = 0; k < allWeekDates.length; k++){
                let calDay = parseInt(allWeekDates[k].toLocaleDateString().split("/")[0]);
                if (calDay == day) {
                    j = k+1;
                    break;
                }
            }
            i = isAm ? (time % 12) + 1 : ((time % 12) + 1) + 12;
            console.log(j);
            states[i][j] = d["patient"];
        }
        setAppointment(states)
    }

    useEffect(() => {
        makeAPICall();
    }, [])

    const changeCalenderData = (allWeekDates) => {
        let states = []
        for (let i = 0; i < 25; i++) {
            let rowStates = [];
            for (let j = 0; j < 8; j++) {
                if (i == 0 && j != 0) {
                    rowStates[j] = allWeekDates[j - 1].toLocaleDateString();
                } else if (i != 0 && j == 0) {
                    rowStates[j] = dates[i-1];
                }
                else {
                    rowStates[j] = "";
                }
            }
            states[i] = rowStates;
        }
        makeChangesInCalender(data, states, allWeekDates);
    }

    const increment = () => {
        setFromDate((prev) => new Date(prev.getTime() + 24 * 60 * 60 * 1000));
        setToDate((prev) => new Date(prev.getTime() + 24 * 60 * 60 * 1000));
        makeAPICall();
    }


    const decrement = () => {
        setFromDate((prev) => new Date(prev.getTime() - 24 * 60 * 60 * 1000));
        setToDate((prev) => new Date(prev.getTime() - 24 * 60 * 60 * 1000));
        makeAPICall();
    }

    // const decrement = ()

    return (<HeaderFrame><div className={style.appointmentChart}>
        <ChartHeader incrementDate={increment} decrement={decrement} toDate={toDate} fromDate={fromDate}></ChartHeader>
        <ChartBody appointment={appointment}>
            
        </ChartBody>
    </div></HeaderFrame>)
}

export default DashBoard;