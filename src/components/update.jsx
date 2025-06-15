
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../App.css'


const UpdateSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required')
});


function Update() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSubmit = (values) => {
    localStorage.setItem('user', JSON.stringify(values));
    navigate('/info');
  };

  if (!user) return <div>No user to update</div>;

  return (
    <div className="container">
      <h2>Update Info</h2>
      <Formik
        initialValues={user}
        validationSchema={UpdateSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>First Name</label>
          <Field name="firstName" />2
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

          <button type="submit">Save</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Update;