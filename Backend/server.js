import express from "express"
const app = express()
import cors from "cors";
import calculateSchedule from "./routes/calculate-schedule.js"
const port = process.env.PORT || 80
app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/calculate_schedule',calculateSchedule)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
