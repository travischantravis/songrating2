import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import "../styles/Auth.css";
import { signUp } from "../redux/auth/authActions";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required").label("Name"),
  username: Yup.string()
    .email("Invalid email addresss")
    .required("Required")
    .label("Username"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 characters minimum.")
    .label("Password"),
});

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <input className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error-msg">{meta.error}</div>
      ) : null}
    </div>
  );
};

const SignUp = (props) => {
  const { isSignUpSuccess, signUpError, signUp } = props;

  return (
    <div className="auth-form-container">
      <div className="box auth-form">
        <h2>Sign Up</h2>
        <Formik
          initialValues={{
            name: "",
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            console.log(values);
            await new Promise(signUp(values));

            setTimeout(() => {
              if (isSignUpSuccess) {
                // If sign up is successful
                actions.resetForm({});
              }
              actions.setSubmitting(false);
            }, 200);
          }}
        >
          {(formikProps) => {
            const { isSubmitting } = formikProps;
            return (
              <Form>
                <MyTextInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
                <MyTextInput
                  label="Email"
                  name="username"
                  type="email"
                  placeholder="Email"
                />
                <MyTextInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                {signUpError ? (
                  <div className="error-msg">{signUpError}</div>
                ) : null}
                <button
                  className="my-button btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
                <Link to="/signin">
                  <button type="button" className="my-button margin-left-5">
                    Sign In
                  </button>
                </Link>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignUpSuccess: state.auth.isSignUpSuccess,
    signUpError: state.auth.signUpError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
