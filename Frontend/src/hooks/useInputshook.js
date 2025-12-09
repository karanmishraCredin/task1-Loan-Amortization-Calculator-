import { useState } from "react";
import apiCall from "../api/api";
import { useMain } from "../context/MainProvider";
export default function useinputshook(params) {
    const [values, setValues] = useState({
        loan_amount: 0,
        interest_rate: 0,
        loan_time: 0
    });
    const [info ,setinfo]=useState()
    const [error, seterror] = useState(false)
    const {state,setState } =useMain()
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!values.interest_rate || !values.loan_amount || !values.loan_time) {
            console.log("Error: values cannot be zero.");
            setState({...values,error:true})

            seterror(true)
            return;
        }
        if (values.interest_rate<0 || values.loan_amount<0 || values.loan_time<0) {
            console.log("Error: values cannot be negative");
            seterror(true)
            setState({...values,error:true})
            return;
        }
        console.log("Form submitted:", values);
        let res = await apiCall({ route: "/calculate_schedule", body: values })
        console.log(res)
        setinfo(res?.data)
        setState(res?.data)
        
    };
    return { values, setValues, handleChange, handleSubmit, error, seterror,info };
}