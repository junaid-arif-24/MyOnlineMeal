import React from 'react'
import classes from './Modal.module.css';
import  ReactDOM from 'react-dom';
const Backdrop = props =>{
    return(<div className={classes.backdrop} onClick={props.onHide} />)
}

const ModalOverlay = props =>{
    return(<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
}
const Modal = (props) => {
    const portalEelement = document.getElementById('overlays')
  return (
    <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onHide={props.onHide}/>,portalEelement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalEelement)}
    </React.Fragment>
  )
}

export default Modal