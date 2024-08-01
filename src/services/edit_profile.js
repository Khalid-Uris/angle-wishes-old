import request from "../config/axios-config";

function getUserEditDetail() {
  return request
    .get("edit-user")
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("get edit profile data error", error);
    });
}

function updateUser(body) {
  return request
    .post("update-user", body)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("update user error", error);
    });
}

export const editProfile = {
  getUserEditDetail,
  updateUser,
};
