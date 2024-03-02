"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitButton from "../SubmitButton";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const [formData, setFormData] = useState<{
    senderEmail: string;
    subjectEmail: string;
    message: string;
  }>({
    senderEmail: "",
    subjectEmail: "",
    message: "",
  });
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);

    const formDataToSend = new FormData();
    formDataToSend.append("senderEmail", formData.senderEmail);
    formDataToSend.append("subjectEmail", formData.subjectEmail);
    formDataToSend.append("message", formData.message);

    const { data, error } = await sendEmail(formDataToSend);

    if (error) {
      toast.error(error);
      setPending(false);
      return;
    }

    toast.success("Email sent successfully!");
    setFormData({ senderEmail: "", subjectEmail: "", message: "" });
    setPending(false);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          diogobcondeco@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 mb-3 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={formData.senderEmail}
          onChange={(e) =>
            setFormData({ ...formData, senderEmail: e.target.value })
          }
        />
        <input
          className="h-14 mb-3 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="subjectEmail"
          type="text"
          required
          maxLength={500}
          placeholder="Your subject"
          value={formData.subjectEmail}
          onChange={(e) =>
            setFormData({ ...formData, subjectEmail: e.target.value })
          }
        />
        <textarea
          className="h-52 mb-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <SubmitButton pending={pending} />
      </form>
    </motion.section>
  );
};

export default Contact;
