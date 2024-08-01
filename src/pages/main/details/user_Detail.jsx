import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

import UserLayout from "../../../layouts/main-layout/main_layout";
import DashboardHeader from "../dashboard/header";

import MDMenu from "../../../components/other-component/Menu";
import AWTable from "../../../components/table";

import CloseIcon from "@mui/icons-material/Close";
import FolderIcon from "@mui/icons-material/Folder";
import logo from "./../../../assets/images/logo.png";
import back from "./../../../assets/images/back.png";
import file from "./../../../assets/images/file.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GridCard from "../../../components/other-component/grid-card";
import colors from "../../../assets/color/color";
import { folder } from "../../../services/folder";
import { getSubFolderContent } from "../../../redux-store/features/dashboard";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "../../../components/modal";
import { AuthInputs } from "../../../components/other-component/input";
import CommonButton from "../../../components/other-component/common-button";
import ToastNotification from "../../../components/other-component/toastify";
import Loader from "../../../components/other-component/loader";
import { toast } from "react-toastify";

const initialValue = {
  name: "",
  image: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Please enter folder title"),
});

const UserDetail = ({}) => {
  const [selectView, setSelectView] = useState("list");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [selectImage, setSelectImage] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const inputRef = useRef();

  
  const { userCardContent } = useSelector((state) => state?.dashboard);

  const { state } = useLocation();

  const handleToggle = (value) => {
    setSelectView((prev) => (prev === value ? null : value));
  };

  const toggleValue = [
    {
      id: 1,
      title: "List",
      value: "list",
    },
    {
      id: 2,
      title: "Grid",
      value: "grid",
    },
  ];

  const handlePreview = (item) => {
    navigation(`/preview/${item?.id}`, { state: item });
  };

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
      accessor: "updated_at",
      Cell: ({ row }) => {
        const updatedAt = new Date(row.updated_at); // Parse the date
        const lastModifiedDate = updatedAt.toLocaleDateString();
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography>{lastModifiedDate}</Typography>
            <Box>
              <MDMenu
                isAllow={true}
                icon={<MoreVertIcon sx={{ cursor: "pointer" }} />}
                options={[
                  {
                    id: 1,
                    title: "Preview",
                    onClick: () => handlePreview(row),
                  },
                  {
                    id: 2,
                    title: "Account",
                    onClick: () => null,
                  },
                  {
                    id: 3,
                    title: "Settings",
                    onClick: () => null,
                  },
                ]}
              />
            </Box>
          </Box>
        );
      },
    },
  ];

  // const row = [
  //   {
  //     id: 1,
  //     name: "john",
  //     shared_users: "habib1234@gmail.com",
  //     file_size: "2.8MB",
  //     last_modified: "Dec 15, 2024",
  //   },
  //   {
  //     id: 2,
  //     name: "smith",
  //     shared_users: "N/A",
  //     file_size: "2.8MB",
  //     last_modified: "Dec 15, 2024",
  //   },
  //   {
  //     id: 3,
  //     name: "jayden",
  //     shared_users: "habib1234@gmail.com",
  //     file_size: "2.8MB",
  //     last_modified: "Dec 15, 2024",
  //   },
  //   {
  //     id: 4,
  //     name: "jayden",
  //     shared_users: "N/A",
  //     file_size: "2.8MB",
  //     last_modified: "Dec 15, 2024",
  //   },
  //   {
  //     id: 5,
  //     name: "jayden",
  //     shared_users: "habib1234@gmail.com",
  //     file_size: "2.8MB",
  //     last_modified: "Dec 15, 2024",
  //   },
  // ];

  const row = userCardContent;

  const handleGridCard = (data) => {
    navigation(`/preview/${data.id}`, { state: data });
  };

  useEffect(() => {
    dispatch(getSubFolderContent(state.id));
  }, []);

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
        const response = await folder.createSubFolder(state.id, formData);
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
      <ToastNotification />
      <Stack sx={{ mx: { md: 6, sm: 3, xs: 1 } }}>
        <Box sx={{ my: 3 }}>
          <DashboardHeader
            title={`${state.name} Folder`}
            onClick={() => setIsModalOpen((prev) => !prev)}
            memories={() => navigation("/memories")}
          />
        </Box>
        {/* <Box sx={{ display: "flex", alignSelf: "end", mb: 4, gap: 5 }}>
          <Button
            variant="outlined"
            sx={{ borderColor: colors.primary, color: colors.primary }}
            onClick={() => setIsModalOpen((prev) => !prev)}
          >
            Create Folder
          </Button>

          <Button
            variant="outlined"
            sx={{ borderColor: colors.primary, color: colors.primary }}
          >
            Upload File
          </Button>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, display: "flex", gap: 2 }}
          >
            <Box
              sx={{
                width: "25px",
                height: "25px",
                mt: -0.2,
                cursor: "pointer",
              }}
              onClick={() => navigation("/dashboard")}
            >
              <img
                src={back}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
            Files
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {toggleValue.map((data, index) => (
              <Typography
                key={index}
                sx={{
                  backgroundColor:
                    selectView === data.value ? "#BA9A2B66" : "transparent", // Changed the condition to use data.value
                  px: 2,
                  py: 1,
                  border: "1px solid #000",
                  borderTopLeftRadius: data.value === "list" && 10,
                  borderBottomLeftRadius: data.value === "list" && 10,

                  borderTopRightRadius: data.value === "grid" && 10,
                  borderBottomRightRadius: data.value === "grid" && 10,
                  cursor: "pointer",
                }}
                onClick={() => handleToggle(data.value)}
              >
                {data.title}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box sx={{ my: 4 }}>
          {userCardContent.length > 0 ? (
            selectView === "list" ? (
              <AWTable columns={columns} rows={row} />
            ) : (
              <Box className="row" sx={{ display: "flex", flexWrap: "wrap" }}>
                {userCardContent.map((data, index) => (
                  <Box
                    key={index}
                    className="col-md-4 col-sm-6 col-xs-12"
                    onClick={() => handleGridCard(data)}
                    sx={{ cursor: "pointer", mb: 6 }}
                  >
                    <GridCard
                      fileName={data.name}
                      image={data.image}
                      firstLetter={data.name.charAt(0)}
                      menu={[
                        {
                          id: 1,
                          title: "Preview",
                          onClick: () => handleGridCard(data.id),
                        },
                        {
                          id: 2,
                          title: "Account",
                        },
                        {
                          id: 3,
                          title: "Settings",
                        },
                      ]}
                    />
                  </Box>
                ))}
              </Box>
            )
          ) : (
            <Box>
              <Typography>No records found</Typography>
            </Box>
          )}
        </Box>
      </Stack>
      <CustomModal
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        body={body}
      />
    </UserLayout>
  );
};

export default UserDetail;
