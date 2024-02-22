import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './components/Signup';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Signup/>} />
    
    </Routes>
    
    </BrowserRouter></>
  );
}


export default App;
