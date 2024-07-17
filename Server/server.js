const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors')
const session = require('express-session');
const cookieParser = require('cookie-parser');

const loginRoutes = require('./routes/authroutes/loginroutes')
const protectedRoutes = require('./routes/authroutes/protectedroutes')
const studentRoutes = require('./routes/studentroutes');
const teacherRoutes = require('./routes/teacherroutes');
const staffRoutes = require('./routes/staffroutes');
const courseRoutes = require('./routes/courseroutes');
const eventRoutes = require('./routes/eventroutes');
const liveclassRoutes = require('./routes/liveclassroutes');
const forgotpasswordRoutes = require('./routes/authroutes/forgotpassword');
const feeRoutes = require('./routes/feeroutes');
const paymentTeacherRoutes = require('./routes/paymentteacherroutes')
const paymentStaffRoutes = require('./routes/staffpaymentroutes')
const paymentRoutes = require("./routes/paymentroutes");
const admitCardRoutes = require("./routes/admitcardroutes");
const communicationRoutes = require("./routes/communicationroutes");
const countRoutes = require("./routes/countroutes");
const assignmentRoutes = require("./routes/assignmentroutes");
const homeworkRoutes = require("./routes/homeworkroutes");
const libraryRoutes = require("./routes/libraryroutes");
const examRoutes = require("./routes/examroutes");
const reportcardRoutes = require("./routes/reportcardroutes");
const transpotationRoutes = require("./routes/transpotation");
const enquiryRoutes = require("./routes/enquiryroutes");
const hotelRoutes = require("./routes/hotelroutes");
const subjectRoutes = require("./routes/subjectroutes");
const classRoutes = require("./routes/classroutes");
const classScheduleRoutes = require("./routes/classscheduleroutes");
const calendarRoutes = require("./routes/calendarroutes");

const app = express();
app.use(cookieParser());

app.use(session({
    secret: '5c69a3691b9269010ce3f516d894af1106a7b15015b7442e62643a09154e18c6d451d28ce47dce76c8c794a67cc0cc61f56eabc6520f44aa0acf2321112bb9eb',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, httpOnly: true } // Hardcoded secure to true
}));

const connectDB = require('./config/db');

connectDB();


//app.use(cors())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("PhonePe Integration APIs!");
  });

app.use("/api", studentRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/auth", loginRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/liveclass", liveclassRoutes);
app.use("/api/forgotpassword", forgotpasswordRoutes);
app.use("/api/fees", feeRoutes);
app.use("/api/paymentTeacher", paymentTeacherRoutes);
app.use("/api/StaffPayment", paymentStaffRoutes);
app.use("/api/pay", paymentRoutes);
app.use("/api/admitcard", admitCardRoutes);
app.use("/api/communication", communicationRoutes);
app.use("/api/count", countRoutes);
app.use("/api/assignment",assignmentRoutes);
app.use("/api/homework",homeworkRoutes);
app.use("/api/library",libraryRoutes);
app.use("/api/exam",examRoutes);
app.use("/api/reportcard",reportcardRoutes);
app.use("/api/reportcard",reportcardRoutes);
app.use("/api/transpotation",transpotationRoutes);
app.use("/api/enquiry",enquiryRoutes);
app.use("/api/hotel",hotelRoutes);
app.use("/api/subject",subjectRoutes);
app.use("/api/class",classRoutes);
app.use("/api/classSchedule",classScheduleRoutes);
app.use("/api/calendar",calendarRoutes);

const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is running on port http://localhost:5000');

})

//{
    // "studentID":"66571f73046e6577d72ba13c",
    // "totalFee": 12000,
    // "paidAmount":6000
     
 //}