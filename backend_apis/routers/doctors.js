const Router = require("express").Router();
const {getDoctorAppointment} = require("../controllers/doctors.js")

Router.route("/appointments")
    .get();

Router.route("/:id/appointments")
    .get(getDoctorAppointment);

Router.route("/:id/schedules")
    .get();

Router.route("/:id/patients")
    .get();

Router.route("/:id/edit")
    .get();

module.exports = Router;
