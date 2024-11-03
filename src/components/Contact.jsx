import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.scss";

const Contact = () => {
  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setLoading(true);

    formData.append("access_key", "5f5b91cf-2fc6-4dc3-9cd2-dc8838e33f09");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );

    if (res.success) {
      console.log("Success", res);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       'service_6y5vft7',
  //       'template_5g175sf',
  //       {
  //         from_name: form.name,
  //         to_name: "Aarti Rathi",
  //         from_email: form.email,
  //         to_email: "aarti.rathi1710@gmail.com",
  //         message: form.message,
  //       },
  //       'FMQ4a1hK5NSAkumfj',
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert("Thank you. I will get back to you as soon as possible.");

  //         setForm({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.error(error);

  //         alert("Ahh, something went wrong. Please try again.");
  //       }
  //     );
  // };

  return (
    <div
      className={`xl:mt-12 flex gap-2 overflow-hidden contact`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.5] xl:h-auto md:h-[600px] h-[400px] earth'
      >
        <EarthCanvas />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.5] bg-black-100 p-8 rounded-2xl earth'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-3 flex flex-col gap-8 form1'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-3 px-3 placeholder:text-secondary text-white rounded-lg border-none font-medium'
            />
          </label>

          
          <button
            type='submit'
            className='bg-tertiary py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="mt-5 contact__options">
          <article className="contact__option">
            <MdEmail />
            <a href="mailto:aarti.rathi1710@gmail.com" target="_blank" className="blue-text-gradient">aarti.rathi1710@gmail.com</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <a href="https://api.whatsapp.com/send/?phone=917040031669&text&app_absent=0&lang=en" target="_blank" className="blue-text-gradient">
              +91 7040031669
            </a>
          </article>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");