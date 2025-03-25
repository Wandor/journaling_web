import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "@journal/components/uielements/input";
import Checkbox from "@journal/components/uielements/checkbox";
import Button from "@journal/components/uielements/button";
import IntlMessages from "@journal/helpers/intlMessages";
import SignInStyleWrapper from "./SignIn.styles";
import useApi from "../../../customHooks/useApi";
import apis from "../../../utils/apis";

export default function SignIn() {
  const navigate = useNavigate();
  let location = useLocation();
  const { post } = useApi();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLoggedIn = useSelector((state) => state.Auth.idToken);

  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);

  function handleLogin(e) {
    e.preventDefault();
    console.log("clicked", e);

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
  let { from } = location.state || { from: { pathname: "/dashboard" } };

  if (redirectToReferrer) {
    return navigate(from);
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
            <form>
              <div className="isoInputWrapper">
                <Input
                  size="large"
                  placeholder="Email Address"
                  autoComplete="true"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  size="large"
                  type="password"
                  placeholder="Password"
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
            </form>
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
