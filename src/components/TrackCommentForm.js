import React from "react";
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
  } = props;
  const artistNames =
    track.artists && track.artists.map((artist) => artist.name).join(", ");

  return (
    <div>
      <h3>Track Comment</h3>
      {/* <div className="success-message">
        <Message positive>
          <p>Comment added</p>
        </Message>
      </div> */}
      {isCommented && !isFormVisible ? (
        <div className="track-comment">
          <p>Rating: {curComment.rating}/10</p>
          <p>Comment: {curComment.comment}</p>
          <p>{curComment.isFav ? "One of my favorite songs" : null}</p>
        </div>
      ) : null}
      {isFormVisible ? (
        <Formik
          initialValues={{
            id: track.id,
            name: track.name,
            artists: artistNames,
            hotKey: "all",
            rating: isCommented ? curComment.rating : "",
            comment: isCommented ? curComment.comment : "",
            isFav: isCommented ? curComment.isFav : false,
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
            }, 200);

            setTimeout(() => {
              setFormVisible(false);
            }, 1000);
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
                    {isCommented ? "Edit" : "Add"}
                  </button>
                  <button
                    className="my-button margin-left-5"
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
          <p>{isCommented ? "Edit" : "Add"} Comment</p>
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
