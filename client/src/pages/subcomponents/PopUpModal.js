import React from 'react';
import ReactDOM from 'react-dom';
// import ProjectForm from './ProjectForm'

const PopUpModal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          test
          {/* <ProjectForm /> */}
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default PopUpModal

//Portals allow React components to render in another part of the DOM that is outside of their parent component.
//Therefore, we can use a Portal to mount our Modal component to the end of the document.body element, rather than as a child of another component.