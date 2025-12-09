import express from "express"
const calculate_schedule = express.Router();
import calculateLoan from "../services/calculateLoan.js";
export default calculate_schedule.post('/', (req, res) => {
    console.log(req.body)
    if (!(req.body && req.body.loan_amount && req.body.interest_rate && req.body.loan_time)) {
        res.send({
            status: "error",
            message: "value is missing..."
        })
    }
   const data= calculateLoan(req.body.loan_amount,req.body.interest_rate,req.body.loan_time)
    res.send({
        status: "ok",
        data: data
    })
})