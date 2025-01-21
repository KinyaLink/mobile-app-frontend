import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FormInputField from "@/components/FormInputField";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    username: Yup.string().min(3).max(20).required(),
    password: Yup.string().min(8).required(),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Your passwords should match"
    ),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setTouched,
      }) => (
        <View>
          <FormInputField
            onChange={() => ""}
            placeholder="Email"
            icon={
              <MaterialCommunityIcons
                name="email-outline"
                size={30}
                color="white"
              />
            }
          />
          <FormInputField
            placeholder="Username"
            icon={<FontAwesome5 name="user-circle" size={30} color="white" />}
          />
          <FormInputField
            placeholder="Password"
            icon={
              <MaterialCommunityIcons
                name="shield-key-outline"
                size={30}
                color="white"
              />
            }
          />
          <FormInputField
            placeholder="Confirm Password"
            icon={
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={30}
                color="white"
              />
            }
          />
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
