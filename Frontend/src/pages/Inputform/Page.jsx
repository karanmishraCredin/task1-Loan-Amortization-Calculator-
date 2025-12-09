import { Button, Box } from "@mui/material";
import NumberField from '../../UI/NumberField';
import Error from "../../UI/Error";
import Info from "./info";
import useinputshook from "../../hooks/useInputshook";
import { useMain } from "../../context/MainProvider";
export default function Inputs() {
    const { state, setState } = useMain()
    const { values, setValues, handleChange, handleSubmit, error, seterror } = useinputshook()
    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                width: "100vw",
                height: "50vh"
            }}
        >
            {state.error ? <Error error_message="Error: values cannot be zero or negative !" /> : <></>}
            <NumberField
                label="Loan Amount"
                name="loan_amount"
                size="small"
                defaultValue={0}
                onChange={handleChange}
            />

            <NumberField
                label="Yearly Interest Rate (%)"
                name="interest_rate"
                size="small"
                defaultValue={0}
                onChange={handleChange}
            />

            <NumberField
                label="Loan Time (in years)"
                name="loan_time"
                size="small"
                defaultValue={0}
                onChange={handleChange}
            />
            <Button type="submit" variant="contained">
                Submit
            </Button>
            <Info />
        </Box>
    )
}
