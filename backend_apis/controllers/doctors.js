//custom file imports
const { getPool } = require("../configs/database_config.js");
const { quries } = require("../configs/database_queries.js");
const moment = require("moment");

//function to get all appointments for all the doctors
module.exports.getAllDoctorsAppointments = (req, res) => {
    const { org, } = req.params;
    const { fromDate, toDate } = req.query;

    const pool = getPool(org, )

}

//function to get all the schedules for all the doctors
module.exports.getAllDoctorsSchedules = (req, res) => {

}

//function to get the appointments for the doctor with given id 
//in the path of the url
module.exports.getDoctorAppointment = async (req, res) => {
    let { id } = req.params;
    let company = req.company;
    let { from, to } = req.query;
    let pool = getPool(company, {});

    console.log(from, to)

    let [data, fields] = await pool.execute(quries["getDoctorAppointments"], [from, to, id]);
    for (let value of data) {
        value["date"] = moment.utc(value["date"]).add(24, 'hours').format('YYYY-MM-DD');
        console.log(value);
    }
    pool.end();
    res.send(data);
}

//function to get the schedules for the doctor
//with given id in the path of the url
module.exports.getDoctorSchedule = (req, res) => {

}

module.exports.getPatientsForDoctor = (req, res) => {
    
}

module.exports.editDoctorDetails = (req, res) => {
    
}
