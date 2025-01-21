import { StyleSheet, Text, View } from "react-native";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React from "react";

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email(),
    username: Yup.string().min(3).max(20),
    password: Yup.string().min(8).max(20),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Your passwords should match"
    ),
  });
  return (
    <Formik validationSchema={validationSchema}>
      {() => {}}
    </Formik>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
