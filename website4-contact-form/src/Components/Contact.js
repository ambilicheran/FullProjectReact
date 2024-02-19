import Divider from "./Divider";
import classesContact from "./Contact.module.css";
import InputWithLabel from "./InputWithLabel";
import { useState } from "react";
import { useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateName = () => {
    if (!name.trim()) {
      setErrorName("A name is required.");
    }
    else {
      setErrorName("");
    }
  }

  const validateEmail = () => {
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
  }

  const validatePhone = () => {
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
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }
  const onBlurNameHandler = () => {
    validateName();
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  }
  const onBlurEmailHandler = () => {
    validateEmail();
  }

  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  }
  const onBlurPhoneHandler = () => {
    validatePhone();
  }

  const validateForm = () => {
    setIsFormValid(!errorName && !errorEmail && !errorPhone)
  }

  useEffect(() => {
    validateForm();
  }, [errorName, errorEmail, errorPhone])

  return (
    <div id="contact" className={classesContact.contactContainer}>
      <h1
        style={{ color: "rgb(44, 62, 80)" }}
        className={classesContact.subTitle}
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
        <button style={{ opacity: isFormValid ? 1 : 0.5 }} disabled={!isFormValid} className={classesContact.sendButton}>Send</button>
      </div>
    </div>
  );
};

export default Contact;
