import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "@journal/components/uielements/input";
import Checkbox from "@journal/components/uielements/checkbox";
import Button from "@journal/components/uielements/button";
import IntlMessages from "@journal/helpers/intlMessages";
import SignInStyleWrapper from "./SignIn.styles";
import useApi from "../../../customHooks/useApi";
import apis from "../../../utils/apis";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function SignIn() {
  const navigate = useNavigate();

  const { post } = useApi();

  function handleLogin(values) {

    const { email, password } = values;

    post(apis.login, { email, password })
      .then((response) => {
        if(response){
          navigate('/dashboard')
        }
      })
      .catch((errorResponse) => {
        console.log(errorResponse);
      });
  }

  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              <IntlMessages id="page.signInTitle" />
            </Link>
          </div>
          <div className="isoSignInForm">
            <Formik
              initialValues={{ email: "", password: "", rememberMe: false }}
              validationSchema={SignInSchema}
              onSubmit={(values) => {
                handleLogin(values);
              }}
            >
              {({ values, handleChange, handleBlur, isSubmitting, errors, touched }) => (
                <Form>
                  <div className="isoInputWrapper">
                    <Field
                      as={Input}
                      size="large"
                      placeholder="Email Address"
                      name="email"
                      id="email"
                      autoComplete="true"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      status={errors.email && touched.email ? "error" : ""}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="isoInputWrapper">
                    <Field
                      as={Input}
                      size="large"
                      type="password"
                      placeholder="Password"
                      name="password"
                      id="password"
                      autoComplete="false"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      status={errors.email && touched.email ? "error" : ""}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  <div className="isoInputWrapper isoLeftRightComponent">
                    <Checkbox
                      name="rememberMe"
                      checked={values.rememberMe}
                      onChange={handleChange}
                    >
                      <IntlMessages id="page.signInRememberMe" />
                    </Checkbox>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={isSubmitting}
                    >
                      <IntlMessages id="page.signInButton" />
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
{/* 
          <div className="isoSignInForm">
            <form>
              <div className="isoInputWrapper">
                <Input
                  size="large"
                  placeholder="Email Address"
                  autoComplete="true"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  size="large"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  autoComplete="false"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" onClick={handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>
            </form> */}
            <div className="isoCenterComponent isoHelperWrapper">
              <Link to="/forgotpassword" className="isoForgotPass">
                <IntlMessages id="page.signInForgotPass" />
              </Link>
              <Link to="/signup">
                <IntlMessages id="page.signInCreateAccount" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}
