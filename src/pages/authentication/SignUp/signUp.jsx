import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Checkbox from "@journal/components/uielements/checkbox";
import Button from "@journal/components/uielements/button";
import authAction from "@journal/redux/auth/actions";
import appActions from "@journal/redux/app/actions";
import IntlMessages from "@journal/helpers/intlMessages";
import SignUpStyleWrapper from "./SignUp.styles";
import Input from "../../../components/uielements/input";

const { login } = authAction;
const { clearMenu } = appActions;

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const handleLogin = (token = false) => {
    console.log(token, "handlelogin");
    if (token) {
      dispatch(login(token));
    } else {
      dispatch(login());
    }
    dispatch(clearMenu());
    navigate("/dashboard");
  };

  return (
    <SignUpStyleWrapper className="isoSignUpPage">
      <div className="isoSignUpContentWrapper">
        <div className="isoSignUpContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              <IntlMessages id="page.signUpTitle" />
            </Link>
          </div>

          <div className="isoSignUpForm">
            <div className="isoInputWrapper isoLeftRightComponent">
              <Input size="large" placeholder="First name" />
              <Input size="large" placeholder="Last name" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" placeholder="Username" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" placeholder="Email" />
            </div>

            <div className="isoInputWrapper">
              <Input size="large" type="password" placeholder="Password" />
            </div>

            <div className="isoInputWrapper">
              <Input
                size="large"
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            <div className="isoInputWrapper" style={{ marginBottom: '50px' }}>
              <Checkbox>
                <IntlMessages id="page.signUpTermsConditions" />
              </Checkbox>
            </div>

            <div className="isoInputWrapper">
              <Button type="primary">
                <IntlMessages id="page.signUpButton" />
              </Button>
            </div>
            <div className="isoInputWrapper isoCenterComponent isoHelperWrapper">
              <Link to="/">
                <IntlMessages id="page.signUpAlreadyAccount" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SignUpStyleWrapper>
  );
}
