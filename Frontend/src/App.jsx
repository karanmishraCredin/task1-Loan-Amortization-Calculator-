import Inputs from "./pages/Inputform/Page";
import Tables from "./pages/Tables/Page";
import{ MainProvider} from '../src/context/MainProvider.jsx'

export default function App() {

  return (
    <MainProvider>
      <div style={{ height: '100vh', width: '100vw' }}>
        <Inputs />
        <Tables />
      </div>
    </MainProvider>

  );
}
