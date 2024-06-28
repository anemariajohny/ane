import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/log';
import Signup from './component/reg';
import Errors from './component/error';
function App() 
{
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path = "/reg" element={<Signup />}></Route>
      <Route path = "/log" element={<Login />}></Route>
      <Route path = "*" element={<Errors/>}></Route>

      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
