import React, { ReactNode } from "react";
import PropTypes from "prop-types";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ show, onClose, children }: ModalProps) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <img src="./close.svg" alt="close icon" />
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;