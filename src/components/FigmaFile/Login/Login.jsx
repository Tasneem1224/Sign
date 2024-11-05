import "./Login.css";
import { Link } from "react-router-dom";

import Image01 from "./google.png";
import Image02 from "./facebook.png";

function LoginForm() {
  return (
    <div className="login-container">
      <div className="login-form">
        <p className="p10">Log in</p>
        <p className="p20">
          Don’t have an ccount?{" "}
          <Link to="/">
            <u>Sign up</u>
          </Link>
        </p>

        <div className="social-buttons">
          <button className="social-button facebook">
            <img className="socialimg" src={Image01} alt="" />
            Login with Facebook
          </button>
          <button className="social-button google">
            <img className="socialimg" src={Image02} alt="" />
            Login with Google
          </button>
        </div>
        {/***************************************************************************************/}
        <div className="divider">
          <span>OR</span>
        </div>

        <form className="form">
          <div className="form-group">
            <label className="la00">Your email</label>
            <br />
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label className="la00">Your password</label>

            <br />
            <input type="password" name="password" required />
            <p className="pass">
              <u>Forget your password </u>
            </p>
          </div>
          <button className="logbu" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
