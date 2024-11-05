import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import Image from "./Image.png";
import Image0 from "./Group 1.png";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [name, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "username":
        setUser(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentTime = new Date().toLocaleString();
    setSubmittedData({ email, name, password, time: currentTime });
    setSubmitted(true);
  };

  return (
    <div className="signup-page">
      <div className="signup-form">
        {submitted ? (
          <div className="submitted-data">
            <h3 className="data">Submitted Data</h3>
            <p className="re">Email: {submittedData.email}</p>
            <br />
            <p className="re">Username: {submittedData.name}</p>
            <br />
            <p className="re">Password: {submittedData.password}</p>
            <br />
            <p className="re">Time of Registration: {submittedData.time}</p>
            <br />
            <button onClick={() => setSubmitted(false)}>Edit</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="p1">Welcome to Design Community</p>
            <p className="p2">
              Already have an account?{" "}
              <Link to="/login">
                <u>Log in</u>
              </Link>
            </p>
            <br />
            <div className="form-group">
              <label className="la1">Email</label>
              <input
                className="in"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <br />
              <br />
            </div>
            <div className="form-group">
              <label className="la1">Username</label>
              <input
                className="in"
                type="text"
                name="username"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <div className="form-group">
              <label className="la1">Password</label>
              <label className="la0">
                <img className="hideimg" src={Image0} alt="" />
                {"    "}
                Hide
              </label>
              <input
                className="in"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <table className="custom-table">
              <tbody>
                <tr>
                  <td>
                    <ul>
                      <li>Use 8 or more characters</li>
                      <li>One special character</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>One Uppercase character</li>
                      <li>One number</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>One lowercase character</li>
                      <br />
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="checkbox-group">
              <input
                className="check"
                type="checkbox"
                name="agreed"
                onChange={handleChange}
              />
              <label>
                I want to receive emails about the product, feature updates,
                events, and marketing promotions.
              </label>
            </div>
            <p className="p3">
              By creating an account, you agree to the <u>Terms of use</u> and{" "}
              <u>Privacy Policy</u>.
            </p>
            <button type="submit">Create an Account</button>
            <br />
            <br />
            <p className="p4">
              Already have an account?{" "}
              <Link to="/login">
                <u>Log in</u>
              </Link>
            </p>
          </form>
        )}
      </div>
      <div className="signup-image">
        <img src={Image} alt="Signup visual" />
      </div>
    </div>
  );
}

export default SignUpForm;
