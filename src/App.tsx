import { BrowserRouter } from 'react-router-dom';
import RoutesWrapper from './pages/RoutesWrapper';


function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesWrapper />
      </BrowserRouter>
    </>
  );
}

export default App;
