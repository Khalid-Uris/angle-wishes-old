import request from "../config/axios-config";

function registration(formData) {
  return request
    .post("register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("User Registration==>", error);
      throw error;
    });
}

function login(body) {
  return request
    .post("login", body)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("LogIn Error==>", error);
      throw error;
    });
}
function logout() {
  return request
    .get("logout")
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("LogoutError==>", error);
      throw error;
    });
}

function forgetPassword(body) {
  return request
    .post("forget-password", body)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("Foret Password Error==>", error);
      throw error;
    });
}

function resetPassword(body) {
  return request
    .post("reset-password", body)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("Reset Password error==>", error);
      throw error;
    });
}

export const authServices = {
  registration,
  login,
  logout,
  forgetPassword,
  resetPassword,
};
