import React from "react";
import { Formik } from "formik";

const TrackCommentForm = () => {
  return (
    <div>
      <Formik initialValues={{ rating: "", comment: "", isFav: false }}>
        {(props) => {
          // console.log(props)
          return (
            <form>
              <input type="text" placeholder="Comment" />
              <input type="text" placeholder="Rating" />
              <button className="myButton addComment">Add</button>
              <button className="myButton cancelForm">Cancel</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default TrackCommentForm;
