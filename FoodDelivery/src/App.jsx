import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login/login';
import Navbar from './Components/Navbar/Navbar';
import { UserProvider } from './Components/UserContext'; 
import Home from './pages/home/home';

function App() {


  return (
    <UserProvider>
    <>
  
    <Navbar />

    <Routes>
      
    <Route path="/auth" element={<Login isLoggedIn={false} />} />
    <Route path='/home' Component={Home}></Route>
    <Route path='/' Component={Home}></Route>
    </Routes>
  
    </>
    </UserProvider>
  );
}

export default App;