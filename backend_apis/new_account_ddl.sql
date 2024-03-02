USE meddoc_cintal;
SHOW TABLES;

CREATE TABLE doctors_details(
 id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL
);

select * from doctors_details;

CREATE TABLE patients_details(
id INTEGER PRIMARY KEY NOT NULL auto_increment,
name VARCHAR(100) NOT NULL
);

CREATE TABLE doctors_schedules(
id INTEGER primary KEY NOT NULL AUTO_INCREMENT,
doctor_id INT NOT NULL,
patient_id INT NOT NULL,
date DATE NOT NULL,
time time NOT NULL,
FOREIGN KEY (doctor_id) REFERENCES doctors_details(id),
FOREIGN KEY (patient_id) REFERENCES patients_details(id)
);


CREATE TABLE doctors_appointments(
id INTEGER primary KEY NOT NULL AUTO_INCREMENT,
doctor_id INT NOT NULL,
patient_id INT NOT NULL,
date DATE NOT NULL,
time VARCHAR(100) NOT NULL,
FOREIGN KEY (doctor_id) REFERENCES doctors_details(id),
FOREIGN KEY (patient_id) REFERENCES patients_details(id)
);

SELECT * FROM vw_doctors_appointment;
drop view vw_doctors_appointment;

CREATE VIEW vw_doctors_appointment AS 
(SELECT dapp.id, ds.id as docid, pd.id as patientid, ds.name as doctor, pd.name as patient, dapp.date, dapp.time
FROM doctors_appointments dapp
inner join doctors_details ds
ON dapp.doctor_id = ds.id
INNER JOIN patients_details pd
ON dapp.patient_id = pd.id
);

INSERT INTO doctors_details(name) VALUES('Hrithik R');

INSERT INTO patients_details(name) VALUES('Sam Curran');

SELECT NOW();
INSERT INTO doctors_appointments(doctor_id, patient_id, date, time) VALUES(1,1, current_date(), time_format(current_time(), '%h %p'));

SELECT * FROM vw_doctors_appointment;