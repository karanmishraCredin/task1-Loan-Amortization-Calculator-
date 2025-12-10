import Inputs from "./pages/Inputform/Page";
import Tables from "./pages/Tables/Page";
import { MainProvider } from '../src/context/MainProvider.jsx'
import Box from '@mui/material/Box';
export default function App() {

  return (
    <MainProvider>
      <Box style={{ height: '100vh', width: '100vw' }}>
        <Inputs />
        <Tables />
      </Box>
    </MainProvider>
  );
}
