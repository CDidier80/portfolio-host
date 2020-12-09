import React from 'react';
import ReactDOM from 'react-dom';
import ProjectForm from './ProjectForm'

const styles = {
  modelOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1040",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#000",
    opacity: ".5"
  },
  modalWrapper: {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1050",
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowYy: "auto",
    outline: "0"
  },
  modal: {
    zIndex: "100",
    background: "white",
    position: "relative",
    margin: "1.75rem auto",
    borderRadius: "3px",
    maxWidth: "500px",
    padding: "2rem"
  },
  modalHeader: {
    display: "flex",
    justifyContent: "flexEnd"
  },
  modalCloseButton: {
    fontSize: "1.4rem",
    fontWeight: "700",
    lineHeight: "1",
    color: "#000",
    opacity: ".3",
    cursor: "pointer",
    border: "none"
  },
  button: {
    fontSize: ".9rem",
    fontWeight: "700",
    border: "none",
    borderRadius: "3px",
    padding: "3rem 1rem",
    marginLeft: ".5rem"
  },
  buttonDefault: {
    background: "#247BA0",
    color: "#fff",
  }
}


const PopUpModalProject = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div style={styles.modalOverlay} />
    <div style={styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div style={styles.modal}>
        <div style={styles.modalHeader}>
          <button type="button" style={styles.modalCloseButton} data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          <ProjectForm />
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default PopUpModalProject

//Portals allow React components to render in another part of the DOM that is outside of their parent component.
//Therefore, we can use a Portal to mount our Modal component to the end of the document.body element, rather than as a child of another component.