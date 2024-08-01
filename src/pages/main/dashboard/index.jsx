import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import UserLayout from "../../../layouts/main-layout/main_layout";
import { AuthInputs } from "../../../components/other-component/input";
import CommonButton from "../../../components/other-component/common-button";
import colors from "../../../assets/color/color";
import FolderCard from "../../../components/pdf-card";
import AWTable from "../../../components/table";
import MDMenu from "../../../components/other-component/Menu";
import DashboardHeader from "./header";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { folder } from "../../../services/folder";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import CloseIcon from "@mui/icons-material/Close";
import FolderIcon from "@mui/icons-material/Folder";

import file from "./../../../assets/images/file.png";
import logo from "./../../../assets/images/logo.png";
import { getFolder } from "../../../redux-store/features/dashboard";
import CustomModal from "../../../components/modal";
import Loader from "../../../components/other-component/loader";
import ToastNotification from "../../../components/other-component/toastify";
import { useNavigate } from "react-router-dom";

const initialValue = {
  name: "",
  image: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Please enter folder title"),
});

const Dashboard = () => {
  const [isSelected, setIsSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectImage, setSelectImage] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { cardDetail } = useSelector((state) => state?.dashboard);

  const menu = [
    {
      id: 1,
      title: "Profile",
    },
    {
      id: 2,
      title: "Account",
    },
    {
      id: 3,
      title: "Settings",
    },
  ];

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ row }) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: "17px",
                height: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={file}
                alt="file"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  color: "red",
                  filter:
                    row.shared_users === "N/A"
                      ? "invert(1) sepia(50%) saturate(10%) hue-rotate(150deg)"
                      : "none",
                }}
              />
            </Box>
            <Typography>{row.name}</Typography>
          </Box>
        );
      },
    },
    {
      Header: "Shared Users",
      accessor: "shared_users",
    },
    {
      Header: "File Size",
      accessor: "file_size",
    },
    {
      Header: "Last Modified",
      accessor: "last_modified",
      Cell: ({ row }) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography>{row.last_modified}</Typography>
            <Box>
              <MDMenu
                isAllow={true}
                icon={<MoreVertIcon sx={{}} />}
                options={menu}
              />
            </Box>
          </Box>
        );
      },
    },
  ];

  const row = [
    {
      name: "john",
      shared_users: "habib1234@gmail.com",
      file_size: "2.8MB",
      last_modified: "Dec 15, 2024",
    },
    {
      name: "smith",
      shared_users: "N/A",
      file_size: "2.8MB",
      last_modified: "Dec 15, 2024",
    },
    {
      name: "jayden",
      shared_users: "habib1234@gmail.com",
      file_size: "2.8MB",
      last_modified: "Dec 15, 2024",
    },
    {
      name: "jayden",
      shared_users: "N/A",
      file_size: "2.8MB",
      last_modified: "Dec 15, 2024",
    },
    {
      name: "jayden",
      shared_users: "habib1234@gmail.com",
      file_size: "2.8MB",
      last_modified: "Dec 15, 2024",
    },
  ];

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  useEffect(() => {
    dispatch(getFolder());
  }, []);

  const handleFolderCard = (id) => {
    setIsSelected((prev) => (prev === id ? null : id));
    // navigate(`/user_details/${id}`);
  };

  const body = () => {
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectImage(reader.result);
          formik.setFieldValue("image", file);
        };
        reader.readAsDataURL(file);
      }
    };

    const handleClick = () => {
      inputRef.current.click();
    };

    const onSubmit = async (value) => {
      try {
        setIsloading(true);
        const formData = new FormData();
        formData.append("name", values?.name);
        formData.append("image", values?.image);
        const response = await folder.createFolder(formData);
        toast.success(response?.message);
        setOpen(true);
        return response;
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
        formik.resetForm();
        setIsModalOpen(false);
      }
    };

    const formik = useFormik({
      initialValues: initialValue,
      validationSchema: validationSchema,
      onSubmit: (value) => onSubmit(value),
    });

    const { handleChange, handleSubmit, values, errors } = formik;
    return (
      <>
        <ToastNotification />
        <Box
          sx={{
            backgroundColor: "#98c1d9",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              pr: 2,
              pt: 2,
              cursor: "pointer",
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <CloseIcon size="22" sx={{ color: "#fff" }} />
          </Box>
          <Box sx={{ px: { sm: 4, xs: 1, md: 10 }, py: { sm: 1, xs: 1 } }}>
            <Box sx={{ width: "15rem", height: "8rem", margin: "0 auto" }}>
              <img
                src={logo}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box sx={{ pb: 1 }}>
              <form onSubmit={handleSubmit}>
                <AuthInputs
                  placeholder="Enter Title"
                  label="Folder Title"
                  inputWidth="100%"
                  style={{ color: "#fff" }}
                  startIcon={true}
                  icon={<FolderIcon />}
                  value={values?.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  error={errors?.name}
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: 10,
                    justifyContent: { sm: "space-between" },
                  }}
                >
                  <Box>
                    <Button
                      outline
                      style={{ backgroundColor: "transparent" }}
                      onClick={handleClick}
                    >
                      Upload Image
                    </Button>
                    <input
                      type="file"
                      ref={inputRef}
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                    <br />
                    {errors.image && (
                      <Typography variant="caption" color="error">
                        {errors.image}
                      </Typography>
                    )}
                  </Box>
                  <Box
                    sx={{ width: { md: "12rem", sm: "8rem" }, height: "5rem" }}
                  >
                    <img
                      src={selectImage || logo}
                      alt="user image"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  {isLoading ? (
                    <Loader loading={isLoading} />
                  ) : (
                    <CommonButton
                      title="Create Folder"
                      styleBtn={{
                        border: "1px solid #000",
                        borderRadius: 5,
                      }}
                      textColor="#000"
                      mdWidth="10rem"
                      type="submit"
                    />
                  )}
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <UserLayout>
      <Stack sx={{ mx: { md: 6, sm: 3, xs: 1 } }}>
        <Box sx={{ my: 4 }}>
          <DashboardHeader
            title={`Welcom Back, ${user?.full_name}`}
            onClick={handleModal}
            memories={() => navigation("/memories")}
          />
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            // justifyContent: "flex-end",
            alignSelf: "end",
            mb: 4,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: colors?.primary,
              color: colors?.primary,
              gap: 2,
              fontWeight: 500,
            }}
            onClick={handleModal}
          >
            <CreateNewFolderIcon sx={{ color: colors.primary }} />
            Create Folder
          </Button>
        </Box> */}
        <Box className="d-flex align-items-center justify-content-between mb-4">
          <Box className="">
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Folders
            </Typography>
          </Box>
          <Box sx={{ cursor: "pointer" }}>
            <Typography
              sx={{
                color: colors.primary,
                borderBottom: `1px solid ${colors.primary}`,
                fontWeight: 550,
              }}
            >
              View All
            </Typography>
          </Box>
        </Box>
        <Box className="row mb-3" sx={{ display: "flex", flexWrap: "wrap" }}>
          {cardDetail?.length > 0 ? (
            cardDetail.map((data, index) => {
              return (
                <div
                  key={index}
                  className="col-md-3 col-sm-6 col-xs-12 mb-4"
                  onClick={() => handleFolderCard(data.id)}
                >
                  <FolderCard
                    item={data}
                    title={data?.name}
                    isSelected={data.id === isSelected}
                    isAllow={true}
                    image={data?.image}
                  />
                </div>
              );
            })
          ) : (
            <Typography variant="body1">No records found.</Typography>
          )}
        </Box>
      </Stack>
      <Stack sx={{ mx: { md: 6, sm: 3, xs: 1 }, mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Your Files
        </Typography>
        <AWTable columns={columns} rows={row} />
      </Stack>
      <CustomModal
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        body={body}
      />
    </UserLayout>
  );
};

export default Dashboard;
