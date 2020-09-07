import * as profile from "./profileTypes";

const initState = {
  uploadPicError: "",
  uploadPicProgress: 0,
  isUploadPicSuccess: false,
  isUploadPicLoading: false,
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case profile.UPLOAD_PIC_PROGRESS:
      return {
        ...state,
        uploadPicProgress: action.payload,
      };
    case profile.UPLOAD_PIC_SUCCESS:
      return {
        ...state,
        isUploadPicSuccess: true,
        isUploadPicLoading: false,
        uploadPicError: "",
      };
    case profile.UPLOAD_PIC_FAILURE:
      return {
        ...state,
        isUploadPicSuccess: false,
        isUploadPicLoading: false,
        uploadPicError: action.payload,
      };
    case profile.UPLOAD_PIC_LOADING:
      return {
        ...state,
        isUploadPicLoading: true,
        isUploadPicSuccess: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
