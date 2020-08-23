import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

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

const TrackCommentForm = (props) => {
  const {
    curComment,
    track,
    isCommented,
    isFormVisible,
    setFormVisible,
    setNewComment,
    postNewComment,
    getComment,
  } = props;

  // console.log(isCommented);

  return (
    <div>
      <h3>Track Comment</h3>
      {isFormVisible ? (
        <Formik
          initialValues={{
            id: track.id,
            name: track.name,
            rating: "",
            comment: "",
            isFav: false,
            createdAt: isCommented
              ? curComment.createdAt
              : new Date().toISOString(),
            lastEdited: new Date().toISOString(),
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              values.createdAt = isCommented
                ? curComment.createdAt
                : new Date().toISOString();
              values.lastEdited = new Date().toISOString();
              setNewComment(values);
              postNewComment(values);
              actions.setSubmitting(false);
            }, 500);
          }}
        >
          {(formikProps) => {
            const { touched, errors } = formikProps;
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
                  <Field
                    type="checkbox"
                    name="isFav"
                    className="form-checkbox"
                  />
                  <span className="checkbox-label">Favorite song?</span>
                </div>

                <div>
                  <button
                    className="my-button btn-primary"
                    type="submit"
                    disabled={formikProps.isSubmitting}
                  >
                    Add
                  </button>
                  <button
                    className="my-button btn-cancel-form"
                    type="button"
                    onClick={() => {
                      setFormVisible(false);
                    }}
                    disabled={formikProps.isSubmitting}
                  >
                    Cancel
                  </button>
                  {/* <pre>{JSON.stringify(formikProps, null, 2)}</pre> */}
                </div>
              </Form>
            );
          }}
        </Formik>
      ) : (
        <button
          className="my-button btn-open-form"
          onClick={() => {
            setFormVisible(true);
          }}
        >
          Add comment
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    track: state.track.track,
    isFormVisible: state.track.isFormVisible,
    curComment: state.comment.curComment,
    isCommented: state.comment.isCommented,
  };
};

export default connect(mapStateToProps)(TrackCommentForm);
