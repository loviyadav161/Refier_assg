import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import './Modal.css';
const Backdrop=(props)=>{
    return <div className="backdrop" onClick={props.onClose}></div>
};

const Overlay=(props)=>{
    return <div className="modal">{props.children}</div>
};

const portalElement = document.getElementById('overlay');
const Modal=(props)=>{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
        </Fragment>
    )
};
export default Modal;