
import Login from './Components/Login/login';
import Navbar from './Components/Navbar';
import { UserProvider } from './Components/UserContext'; 
function App() {


  return (
    <UserProvider>
    <>
      <Navbar />
      <Login />
    </>
    </UserProvider>
  );
}

export default App;