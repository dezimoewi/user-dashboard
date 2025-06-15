import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required')
});

function Registration() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    localStorage.setItem('user', JSON.stringify(values));
    navigate('/info');
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', phone: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>First Name</label>
          <Field name="firstName" />
          <ErrorMessage name="firstName" component="div" className="error" />

          <label>Last Name</label>
          <Field name="lastName" />
          <ErrorMessage name="lastName" component="div" className="error" />

          <label>Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className="error" />

          <label>Phone</label>
          <Field name="phone" />
          <ErrorMessage name="phone" component="div" className="error" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
