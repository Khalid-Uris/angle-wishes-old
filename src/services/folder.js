import request from "../config/axios-config";

function getFolder() {
  return request
    .get("folder/get")
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("get folder error==>", error);
    });
}

function createFolder(body) {
  return request
    .post("folder/create", body)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("create folder error", error);
    });
}

function createSubFolder(id, body) {
  return request
    .post(`subfolder/create/${id}`, body)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("create folder error", error);
    });
}

//sub folder api

function getFolderWIthContent(id) {
  return request
    .get(`folder/content/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("getFolderWithContentError=>", error);
    });
}

function getMemories() {
  return request
    .get("memories")
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("Get Memories=>", error);
    });
}

function deleteDashboardFolder(id) {
  return request
    .delete(`folder/delete/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.log("Delete dashboard Folder=>", error);
    });
}

export const folder = {
  getFolder,
  createFolder,
  getFolderWIthContent,
  createSubFolder,
  getMemories,
  deleteDashboardFolder,
};
