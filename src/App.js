import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Signup/>} />
    <Route exact path='/login' element={<Login/>} />
    
    </Routes>
    
    </BrowserRouter></>
  );
}


export default App;
