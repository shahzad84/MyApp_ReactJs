import { React, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import Home from "./Home";
const client_id =
  "139295316401-7hb1fd7feh6bsh5i3lu9oijft6cigrm4.apps.googleusercontent.com";
function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    setIsLoggedIn(true);
    navigate("/Home");
  };
  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };
  return (
    <div>
      <GoogleOAuthProvider>
        {isLoggedIn ? (
          // <Navigate to="/Home" />
          <div><h1>hii</h1></div>
        ) : (
          <GoogleLogin
            client_id={client_id}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            style={{ marginTop: "100px" }}
            isSignedIn={true}
          />
        )}
      </GoogleOAuthProvider>
    </div>
  );
}
export default Login;
