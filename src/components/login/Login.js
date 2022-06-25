import './Login.css'
const Login=(props)=>{
    return(
        <div>
            <button className="login" onClick={props.onLogin}>Login</button>
        </div>
    );
};
export default Login;