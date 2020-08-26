import React from "react";
import { connect } from "react-redux";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import "../styles/Auth.css";
import { signUp } from "../redux/auth/authActions";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="form-control" {...field} {...props} />
      {/* {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </>
  );
};

const SignUp = (props) => {
  const { signUpResult, isSignedUpSuccess, error, signUp } = props;

  const user = {
    username: "trachan@ucdavis.edu",
    password: "Abcd123$",
    name: "Travis",
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      <Formik
        initialValues={{
          name: "",
          username: "",
          password: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          await new Promise(signUp(values));

          setTimeout(() => {
            setSubmitting(false);
          }, 200);
        }}
      >
        {(formikProps) => {
          const { isSubmitting } = formikProps;
          return (
            <Form>
              <MyTextInput label="Name" name="name" type="text" />
              <MyTextInput label="Email" name="username" type="email" />
              <MyTextInput label="Password" name="password" type="password" />
              <button
                className="my-button"
                type="submit"
                disabled={isSubmitting}
              >
                Sign Up
              </button>
            </Form>
          );
        }}
      </Formik>
      <div></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signUpResult: state.auth.signUpResult,
    isSignedUpSuccess: state.auth.isSignedUpSuccess,
    error: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
