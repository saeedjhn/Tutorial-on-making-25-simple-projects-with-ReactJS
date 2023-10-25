import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const Index = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0tcr6a8",
        "template_xvpvie3",
        e.target,
        "RpFSh5S9bvYquaegz"
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("The Message Was Successfully Sended", toastOptions);
        }
      })
      .catch((err) => {
        toast.error(err.text, toastOptions);
      });
  };

  return (
    <>
      <section className="container">
        <section className="sendMessage-container">
          <header className="sendMessage__header">
            <h4>Send Message For Manager</h4>
          </header>
          <section className="sendMessage__form">
            <form className="form" action="" onSubmit={sendEmail}>
              <input
                type="hidden"
                name="to_name"
                value="Tutorial-25-Project-By-ReactJS"
              />
              <section className="form__group">
                <input
                  type="text"
                  name="from_name"
                  className="form__control"
                  placeholder="What`s your name?"
                />
              </section>
              <section className="from__group">
                <input
                  type="email"
                  name="email"
                  className="form__control"
                  placeholder="What`s your email?"
                />
              </section>
              <section className="from__group">
                <textarea
                  id=""
                  name="message"
                  cols="30"
                  rows="10"
                  className="form__control"
                  placeholder="Messsage..."
                ></textarea>
              </section>
              <section className="form__group">
                <button className="form__button">SEND</button>
              </section>
            </form>
            <ToastContainer />
          </section>
        </section>
      </section>
    </>
  );
};

export default Index;
