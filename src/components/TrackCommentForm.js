import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  rating: Yup.number()
    .required("Required")
    .typeError("Rating has to be a number")
    .min(0)
    .max(10)
    .label("Rating"),
  comment: Yup.string().required("Required").min(2).label("Comment"),
  isFav: Yup.boolean().label("Checkbox"),
});

const handleFormSubmit = (values, actions) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 500);
};

const handleFormCancel = (e) => {
  console.log(e);
  console.log("Cancel form");
};

const TrackCommentForm = () => {
  return (
    <Formik
      initialValues={{ rating: "", comment: "", isFav: false }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {(props) => {
        const { touched, errors } = props;
        return (
          <Form id="trackCommentForm">
            <div>
              <Field
                type="text"
                name="rating"
                className="form-control"
                placeholder="Rating [0-10]"
              />
              {errors.rating && touched.rating ? (
                <p className="error-msg">{errors.rating}</p>
              ) : null}
            </div>
            <div>
              <Field
                as="textarea"
                className="form-control"
                placeholder="Comment"
                name="comment"
              />
              {errors.comment && touched.comment ? (
                <p className="error-msg">{errors.comment}</p>
              ) : null}
            </div>

            <div>
              <button
                className="my-button btn-primary"
                type="submit"
                disabled={props.isSubmitting}
              >
                Add
              </button>
              <button
                className="my-button cancel-form"
                type="button"
                onClick={handleFormCancel}
                disabled={props.isSubmitting}
              >
                Cancel
              </button>
              <pre>{JSON.stringify(props, null, 2)}</pre>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default TrackCommentForm;
