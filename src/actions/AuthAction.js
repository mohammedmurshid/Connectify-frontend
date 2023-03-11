import * as AuthApi from "../api/AuthRequest";

export const logIn = (formData) => async (dispach) => {
  dispach({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispach({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispach({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};
