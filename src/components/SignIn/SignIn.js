import {
  LoginBackdrop1,
  LoginBackdrop2,
  LoginContainer,
  LoginInner,
  Main,
} from "./SignIn.elements";
import { HiBadgeCheck } from "react-icons/hi";
import { useContext, useState } from "react";
import { StateContext } from "../../context/StateProvider";
import { useHistory } from "react-router-dom";
import signInImage1 from "../../images/signIn-image/signIn.png";
import signInImage2 from "../../images/signIn-image/signIn2.png";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [, dispatch] = useContext(StateContext);
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: "TRACK_LOGIN",
      payload: username,
    });
    history.goBack();
  };

  const handleDemo = (e) => {
    e.preventDefault();
    dispatch({
      type: "TRACK_LOGIN",
      payload: "Player123",
    });
    history.goBack();
  };

  return (
    <Main>
      <LoginBackdrop1 src={signInImage1} alt="backdrop1" />
      <LoginBackdrop2 src={signInImage2} alt="backdrop2" />
      <LoginContainer>
        <LoginInner>
          <div className="login-name">Login</div>
          <div className="login-username">Username</div>
          <div className="input-container">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              placeholder="Type here..."
            />
          </div>
          <div className="login-password">Password</div>
          <div className="input-container">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Type here..."
            />
          </div>
          <button onClick={handleLogin} className="login-btn" type="submit">
            login
          </button>
          <div className="option-title">
            <hr />
            <div>or login with</div>
            <hr />
          </div>
          <button onClick={handleDemo} className="login-demo">
            <HiBadgeCheck className="demo-logo" />
            <div className="demo-name">Demo</div>
          </button>
        </LoginInner>
      </LoginContainer>
    </Main>
  );
};

export default SignIn;
