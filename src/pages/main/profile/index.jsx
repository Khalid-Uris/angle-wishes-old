import React, { useEffect, useRef, useState } from "react";
import { Box, Avatar, Typography, Stack, Button } from "@mui/material";

import UserLayout from "../../../layouts/main-layout/main_layout";
import colors from "../../../assets/color/color";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../redux-store/features/editProfile";

import { AuthInputs } from "../../../components/other-component/input";
import { editProfile } from "../../../services/edit_profile";
import { toast } from "react-toastify";
import CommonButton from "../../../components/other-component/common-button";

import back from "./../../../assets/images/back.png";
import image from "./../../../assets/images/image.png";
import camera from "./../../../assets/images/camera.png";

import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Region from "@mui/icons-material/SouthAmerica";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import Person from "@mui/icons-material/Person";
import Phone from "@mui/icons-material/Phone";
import ToastNotification from "../../../components/other-component/toastify";
import Loader from "../../../components/other-component/loader";

const validationSchema = yup.object({
  full_name: yup.string().required("Please enter name"),
  user_name: yup.string().required("Please enter user name"),
  contact_no: yup.string().required("Please enter contact number"),
  country: yup.string().required("Please enter Country/Region"),
  email: yup
    .string()
    .required("Please enter email")
    .email("Invalid email format"),
});

const Profile = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const { userProfile, loading } = useSelector((state) => state.editUser);
  const inputRef = useRef(null);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const initialValue = {
    full_name: userProfile?.full_name,
    user_name: userProfile?.user_name,
    contact_no: userProfile?.contact_no,
    country: userProfile?.country,
    email: userProfile?.email,
  };

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const onSubmit = async (value) => {
    setIsloading(true);
    try {
      const formData = new FormData();
      formData.append("full_name", values?.full_name);
      formData.append("user_name", values?.user_name);
      formData.append("image", values?.image);
      formData.append("contact_no", values?.contact_no);
      formData.append("country", values?.country);
      formData.append("email", values?.email);
      const response = await editProfile.updateUser(formData);
      toast.success(response?.message);
      setOpen(true);
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
      formik.initialValues;
    }
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: (value) => onSubmit(value),
  });

  const { handleChange, handleSubmit, values, errors } = formik;

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        formik.setFieldValue("image", file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <UserLayout>
      <ToastNotification />
      <div style={{ marginBottom: "20px" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
          margin: { sm: "0 auto", xs: 1 },
        }}
        className="col-md-8 col-sm-10 col-xs-10"
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
          Profile
        </Typography>
      </Box>
      <Stack
        className="col-md-8 col-sm-10 col-xs-12"
        sx={{
          borderRadius: { sm: 3 },
          boxShadow: { sm: "0px 4px 10px rgba(0, 0, 0, 0.8)" },
          margin: { sm: "0 auto" },
          my: { sm: "2rem" },
          //   px: { md: 2, xs: 2 },
          py: 2,
          //   backgroundColor: colors.greyLight
        }}
      >
        <Box
          className="row align-items-center justify-content-center text-align-center"
          sx={{ px: { md: 4, sm: 2, xs: 1 } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 100,
                height: 100,
              }}
            >
              <Avatar
                src={selectedImage || userProfile?.image}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  border: `3px solid ${colors.primary}`,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 12,
                  right: 5,
                  backgroundColor: colors.greyLight,
                  p: 0.3,
                  borderRadius: 20,
                  cursor: "pointer",
                }}
                onClick={handleClick}
              >
                <CameraAltOutlinedIcon
                  sx={{
                    color: colors.primary,
                    fontSize: 24,
                  }}
                />
                <input
                  type="file"
                  ref={inputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", my: 1 }}>
            <Typography
              sx={{ color: colors.primary, fontSize: 18, fontWeight: 600 }}
            >
              {userProfile?.full_name}
            </Typography>
            <Typography
              sx={{ color: colors.greyText, fontSize: 16, fontWeight: 600 }}
            >
              creator
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: colors.primary,
                border: `1px solid ${colors.primary}`,
                mt: 1,
              }}
              onClick={handleEdit}
            >
              Profile Edit
            </Button>
          </Box>
        </Box>
        <Stack sx={{ mx: 1 }}>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                px: { md: 4, sm: 2 },
                "@media (min-width: 768px)": {
                  flexDirection: "row",
                },
              }}
            >
              <AuthInputs
                placeholder="Full Name"
                label="Full Name:"
                className="col-md-6 col-sm-12 col-xs-12"
                icon={<Person style={{ color: colors.grey }} />}
                startIcon={true}
                type="text"
                name="full_name"
                onChange={handleChange}
                value={values?.full_name}
                error={errors?.full_name}
                disabled={isEdit}
              />
              <AuthInputs
                placeholder="User Name"
                label="User Name:"
                className="col-md-6 col-sm-12 col-xs-12"
                inputWidth="100%"
                icon={<Person style={{ color: colors.grey }} />}
                startIcon={true}
                type="text"
                name="user_name"
                onChange={handleChange}
                value={values?.user_name}
                error={errors?.user_name}
                disabled={isEdit}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                px: { md: 4, sm: 2, xs: 1 },
                "@media (min-width: 768px)": {
                  flexDirection: "row",
                },
              }}
            >
              <AuthInputs
                placeholder="Contact number"
                label="Contact no.:"
                className="col-md-6 col-sm-12 col-xs-12"
                inputWidth="100%"
                icon={<Phone style={{ color: colors.grey }} />}
                startIcon={true}
                type="number"
                name="contact_no"
                onChange={handleChange}
                value={values?.contact_no}
                error={errors?.contact_no}
                disabled={isEdit}
              />
              <AuthInputs
                placeholder="Country/Region"
                label="Country/Region:"
                className="col-md-6 col-sm-12 col-xs-12"
                inputWidth="100%"
                icon={<Region style={{ color: colors.grey }} />}
                startIcon={true}
                type="text"
                name="country"
                onChange={handleChange}
                value={values?.country}
                error={errors?.country}
                disabled={isEdit}
              />
            </Box>
            <Box sx={{ px: { md: 4, sm: 2, xs: 1 } }}>
              <AuthInputs
                placeholder="Email"
                label="Email:"
                startIcon={true}
                icon={<MailIcon style={{ color: colors.grey }} />}
                type="email"
                name="email"
                onChange={handleChange}
                value={values?.email}
                error={errors?.email}
                disabled={isEdit}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mr: { sm: 4, xs: 1 },
              }}
            >
              {isLoading ? (
                <Loader loading={isLoading} />
              ) : (
                <CommonButton
                  title="Update"
                  backgroundColor={colors?.primary}
                  // type="submit"
                  mdWidth={{ sm: "30%", xs: "50%" }}
                  textColor="#fff"
                  disabled={isEdit}
                />
              )}
            </Box>
          </form>
        </Stack>
      </Stack>
    </UserLayout>
  );
};

export default Profile;
