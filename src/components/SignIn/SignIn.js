import { LoginContainer, LoginInner, Main } from "./SignIn.elements";
import { HiBadgeCheck } from "react-icons/hi";
const SignIn = () => {
  return (
    <Main>
      <LoginContainer>
        <LoginInner>
          <div className="login-name">Login</div>
          <div className="login-username">Username</div>
          <input type="text" />
          <div className="login-password">Password</div>
          <input type="text" />
          <button className="login-btn">login</button>
          <div className="option-title">
            <hr />
            <div>or login with</div>
            <hr />
          </div>
          <button className="login-demo">
            <HiBadgeCheck className="demo-logo" />
            <div className="demo-name">Demo</div>
          </button>
        </LoginInner>
      </LoginContainer>
    </Main>
  );
};

export default SignIn;
