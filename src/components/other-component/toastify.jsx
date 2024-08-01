import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = ({ message }) => {
  const notify = () =>
    toast(message, {
      position: "top-right", // Set position to top-left
    });

  return (
    <>
      <button onClick={notify} style={{ display: "none" }}>
        Notify!
      </button>
      <ToastContainer position="top-right" />
    </>
  );
};

export default ToastNotification;
