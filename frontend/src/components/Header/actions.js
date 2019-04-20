import { push } from "react-router-redux";

export function redirectToHomePage() {
  return dispatch => {
    dispatch(
      push({
        pathname: "/"
      })
    );
  };
}
