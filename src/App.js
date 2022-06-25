import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useState} from 'react';
import NavBar from './components/NavBar.js';
import LoginDetails from './components/login/LoginDetails';
import Jobs from "./components/job/Jobs";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
function App() {
  const [loginShow, setLoginShow] = useState (false);
  const [login, setLogin] = useState(false);
  const showLoginHandler = () => {
    setLoginShow(true);
  };

  const hideLoginHandler = () => {
    setLoginShow(false);
  };
  const alertHandler=()=>{
    setLogin(true);
  }
  return (
    <>
      <NavBar onLogin = {showLoginHandler}/>
      {login && window.alert('Successfully Logged In')}
      {loginShow && <LoginDetails onClose = {hideLoginHandler} onLogIn={alertHandler}/>}
      <div className="middle">
        <Filter/>
        <Jobs/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
