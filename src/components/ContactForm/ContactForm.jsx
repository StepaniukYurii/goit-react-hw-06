import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const [error, setError] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be 50 characters or less")
      .required("Name is required"),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Invalid format! Expected format: XXX-XX-XX"
      )
      .required("Phone number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    setError("");
    onSubmit({ name, number });
    resetForm();
  };

  return (
    <div className={styles.contactForm}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.Form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className={styles.formInput}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.formError}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="number" className={styles.formLabel}>
              Phone Number
            </label>
            <Field
              type="text"
              id="number"
              name="number"
              className={styles.formInput}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.formError}
            />
          </div>

          <button type="submit" className={styles.formButton}>
            Add Contact
          </button>
        </Form>
      </Formik>

      {}
      {error && <div className={styles.formAlert}>{error}</div>}
    </div>
  );
};

export default ContactForm;
