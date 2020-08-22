// Store access token in localStorage
export const setAuthState = (state) => {
  try {
    localStorage.setItem(
      "state.spotify.accessToken",
      JSON.stringify((state.spotify || {}).accessToken)
    );
  } catch (err) {
    return undefined;
  }
};

export const getAuthState = () => {
  try {
    const accessToken =
      JSON.parse(localStorage.getItem("state.spotify.accessToken")) ||
      undefined;

    return { spotify: { accessToken } };
  } catch (err) {
    return undefined;
  }
};
