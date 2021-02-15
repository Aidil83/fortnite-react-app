import { LoginContainer, LoginInner, Main } from "./SignIn.elements";
const SignIn = () => {
  return (
    <Main>
      <LoginContainer>
        <LoginInner>
          <div className="login-name">Login</div>
          <div className="username">Username</div>
          <input type="text" />
          <div className="password">Password</div>
          <input type="text" />
          <button className="login-btn">login</button>
          <span className="option-title">or login with</span>
          <button className="login-demo">Demo</button>
        </LoginInner>
      </LoginContainer>
    </Main>
  );
};

export default SignIn;
