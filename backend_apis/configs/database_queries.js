module.exports.quries = {
    "getAllDoctorsAppointments": "SELECT * FROM docotrs_appintments AS da WHERE appDate >= '?' and appDate <= '?'",
    "getAllDoctorsSchedules": "SELECT * FROM doctors_schedules AS da WHERE schDate >= '?' and schDate <= '?'",
    "getDoctorAppointments": "SELECT * FROM vw_doctors_appointment AS da WHERE date >= ? and date <= ? and docid = ?;",
    "getDoctorSchedules": "SELECT * FROM doctors_schedules AS da WHERE schDate >= '?' and schDate <= '?' and id ='?'",
    "getDoctorPatients": `SELECT * FROM doctor_patient AS dp
                            INNER JOIN doctor_details ds ON dp.doc_id = ds.id
                            INNER JOIN patient_details pd ON dp.pat_id = pd.id`,
    "editDoctorsDetails": `
    UPDATE doctor_details SET
    name = '?',
    address = '?',
    phone = '?'
    WHERE id = '?'
    `
}