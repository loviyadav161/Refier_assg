import Modal from "../Modal";
import './LoginDetails.css';
const LoginDetails =(props) =>{
    return(
        <Modal onClose={props.onClose}>
            <div className="header">
                <h2>LogIn</h2>
                <button className="close" onClick={props.onClose}>&times;</button>
            </div>
            <form className="login_form" onSubmit={props.onLogIn}>
                <div className="emailId">
                    <label>Email</label>
                    <div>
                        <input type="email" placeholder="Email" required/>
                    </div>
                </div>
                <div className="password">
                    <label>Password</label>
                    <div>
                        <input type="password" placeholder="Password" required/>
                    </div>
                </div>
                <button className="btn1">Forgot Password?</button>
                <button className="btn2" >Login</button>
            </form>
        </Modal>
    );
    
};
export default LoginDetails;