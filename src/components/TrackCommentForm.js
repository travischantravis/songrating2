import React from "react";
import { Formik, Form, Field } from "formik";

const handleFormSubmit = (values, actions) => {
  console.log(values, actions);
};

const handleFormCancel = (e) => {
  console.log(e);
  console.log("Cancel form");
};

const TrackCommentForm = () => {
  return (
    <Formik
      initialValues={{ rating: "", comment: "", isFav: false }}
      onSubmit={handleFormSubmit}
    >
      {(props) => {
        // console.log(props);
        return (
          <Form id="trackCommentForm">
            <div>
              <Field
                type="text"
                name="rating"
                className="form-control"
                placeholder="Rating"
              />
            </div>
            <div>
              <Field
                as="textarea"
                className="form-control"
                placeholder="Comment"
                name="comment"
              />
            </div>

            <div>
              <button className="my-button btn-primary" type="submit">
                Add
              </button>
              <button
                className="my-button cancel-form"
                type="button"
                onClick={handleFormCancel}
              >
                Cancel
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default TrackCommentForm;
