import { BrowserRouter } from 'react-router-dom';
import RoutesWrapper from './pages/RoutesWrapper';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <RoutesWrapper />
        </BrowserRouter>
      </StyledEngineProvider>
    </>
  );
}

export default App;
