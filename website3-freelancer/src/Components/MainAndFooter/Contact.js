import classesMain from "./Main.module.css";
import Divider from "./Divider";
import classesContact from "./Contact.module.css";
import InputWithLabel from "./InputWithLabel";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitValid, setIsSubmitValid] = useState(true)

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    validateForm();
  }
  const onBlurNameHandler = () => {
    if (!name.trim()) {
      setErrorName("A name is required.");
    }
    else {
      setErrorName("");
    }
    validateForm();
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    validateForm();
  }
  const onBlurEmailHandler = () => {
    const emailRegex = /^[^\s@]+@+[^\s@]+\.+[^\s@]+$/;
    if (!email.trim()) {
      setErrorEmail("E-mail is required.")
    }
    else if (!emailRegex.test(email)) {
      setErrorEmail("Enter a valid e-mail address.");
    }
    else {
      setErrorEmail("");
    }
    validateForm();
  }

  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
    validateForm();
  }
  const onBlurPhoneHandler = () => {
    const phoneRegex = /^\d{10}$/;
    if (!phone.trim()) {
      setErrorPhone("Phone number is required.")
    }
    else if (!phoneRegex.test(phone)) {
      setErrorPhone("Enter a valid 10-digit phone number.");
    }
    else {
      setErrorPhone("");
    }
    validateForm();
  }

  const validateForm = () => {
    setIsFormValid(name.trim() !== "" && email.trim() !== "" && phone.trim() !== "")
  }

  const onClickHandler = () => {
    setIsSubmitValid(!errorName && !errorEmail && !errorPhone)
  }

  return (
    <div id="contact" className={classesContact.contactContainer}>
      <h1
        style={{ color: "rgb(44, 62, 80)" }}
        className={classesMain.subTitle}
      >
        CONTACT ME
      </h1>
      <Divider color="rgb(44, 62, 80)" />
      <div className={classesContact.formContainer}>
        <InputWithLabel label="Full Name" placeholder="John Doe" onChange={nameChangeHandler} onBlur={onBlurNameHandler} value={name} error={errorName} />
        <InputWithLabel label="Email Address" placeholder="abc@xyz.com" onChange={emailChangeHandler} onBlur={onBlurEmailHandler} value={email} error={errorEmail} />
        <InputWithLabel label="Phone Number" placeholder="123456789" onChange={phoneChangeHandler} onBlur={onBlurPhoneHandler} value={phone} error={errorPhone} />
        <label className={classesContact.label} htmlFor="msg">
          Message
        </label >
        <br />
        <textarea className={classesContact.textarea} id="msg" rows={3} />
        <div className={classesContact.bottomLine}></div>
      </div>
      <div className={classesContact.sendButtonContainer}>
        <button style={{ opacity: isFormValid ? 1 : 0.5 }} onClick={onClickHandler} disabled={!isFormValid} className={classesContact.sendButton}>Send</button>
      </div>
      {!isSubmitValid && <h4>Not all fields filled correctly! </h4>}
    </div>
  );
};

export default Contact;
