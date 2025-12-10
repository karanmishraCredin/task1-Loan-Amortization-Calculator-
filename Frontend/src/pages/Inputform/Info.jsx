import Box from '@mui/material/Box';
import { useMain } from '../../context/MainProvider';
export default function Info() {
    const { state, setState } = useMain()
    return (
        <>
            <Box component="section" sx={{ p: 2, border: '1px  grey', color:'black',boxShadow: 2}}>
                {"Principal " + state?.principal + " Yearly Rate " + state?.yearlyRate + " Monthly Payment " + state?.monthlyPayment}
            </Box>
        </>
    )
}
