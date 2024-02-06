import { BrowserRouter } from 'react-router-dom';
import RoutesWrapper from './pages/RoutesWrapper';
import { StyledEngineProvider } from '@mui/material/styles';
import { useContextData } from './context/useContext';
import GlobalContext from './context/GlobalContext';

function App() {
  const context = useContextData();
  return (
    <>
      <GlobalContext.Provider value={context}>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>
            <RoutesWrapper />
          </BrowserRouter>
        </StyledEngineProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
