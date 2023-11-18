import React, { useEffect } from "react";
import "../styles/Toast.css";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toastStyle">
      <button className="closeButton" onClick={onClose}>
        &times;
      </button>
      {message}
    </div>
  );
};

export default Toast;
