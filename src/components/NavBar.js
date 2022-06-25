import {Fragment} from 'react';
import './NavBar.css';
import Login from './login/Login';
const NavBar = (props) =>{
    return(
        <Fragment>
            <header className="header">
                <button className='main'>ReFier</button>
                <button className='simple'>Contact Us</button>
                <button className='simple'>Jobs</button>
                <Login onLogin={props.onLogin}/>
                <button className='register'>Register</button>
            </header>
        </Fragment>
    );
};
export default NavBar;