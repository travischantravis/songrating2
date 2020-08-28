import React from "react";
import { connect } from "react-redux";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import "../styles/Auth.css";
import { signIn } from "../redux/auth/authActions";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email("Invalid email addresss")
    .required("Required")
    .label("Username"),
  password: Yup.string().required("Required").label("Password"),
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

const SignIn = (props) => {
  const { signInError, signInResult, isSignInSuccess, signIn } = props;
  return (
    <div className="auth-form-container">
      <div className="box auth-form">
        <h2>Sign In</h2>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            console.log(values);
            await new Promise(signIn(values));

            console.log(signInResult, signInError, isSignInSuccess);
            setTimeout(() => {
              // if (isSignInSuccess) {
              //   // If sign up is successful
              //   actions.resetForm({});
              // }
              actions.setSubmitting(false);
            }, 200);
          }}
        >
          {(formikProps) => {
            const { isSubmitting } = formikProps;
            return (
              <Form>
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
                {/* {signInError ? (
                  <div className="error-msg">{signInError}</div>
                ) : null} */}
                <button
                  className="my-button btn-primary"
                  type="submit"
                  // disabled={isSubmitting}
                >
                  Sign In {isSubmitting}
                </button>
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
    signInResult: state.auth.signInResult,
    isSignInSuccess: state.auth.isSignInSuccess,
    signInError: state.auth.signInError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(signIn(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
