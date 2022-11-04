import { useEffect } from "react";
import { useRef } from "react";
import "./Login.css";
import { useStateValue } from "../../context/StateProvider";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebase.config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [{ user }, setUser] = useStateValue();
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [newUser, setNewUser] = useState({ email: "", pass: "" });
  const navigate = useNavigate();

  const loginPass = async (event) => {
    event.preventDefault();

    if (!user) {
      signInWithEmailAndPassword(firebaseAuth, email, pass)
        .then((response) => {
          alert("Login Successful.");
          localStorage.setItem("user", email);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const loginGoogle = async (event) => {
    event.preventDefault();

    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      setUser({
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      navigate("/");
    }
  };

  const register = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(firebaseAuth, newUser.email, newUser.pass)
      .then((response) => {
        alert("Registration Successful");
        openLogin();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ref = useRef(null);
  let card = null;
  useEffect(() => {
    card = ref.current;
  });

  const openRegister = () => {
    card.style.transform = "rotateY(-180deg)";
  };

  const openLogin = () => {
    card.style.transform = "rotateY(0deg)";
  };

  return (
    <div className="container">
      <div className="card">
        <div className="inner-box" ref={ref} id="login-card">
          <div className="card-front">
            <h2>LOGIN</h2>
            <form onSubmit={loginPass}>
              <input
                type="email"
                className="input-box"
                placeholder="Your Email Id"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <input
                type="password"
                className="input-box"
                placeholder="Password"
                value={pass}
                onChange={(event) => setPass(event.target.value)}
                required
              />
              <input type="submit" className="btn submit-btn" value="Submit" />
            </form>
            <button
              type="button"
              className="btn btn-googlesignin"
              onClick={loginGoogle}
            >
              Sign in with Google
            </button>
            <button
              type="button"
              className="btn register-btn"
              onClick={() => openRegister()}
            >
              I'm new here
            </button>
          </div>
          <div className="card-back">
            <h2>REGISTER</h2>
            <form onSubmit={register}>
              <input
                type="text"
                className="input-box"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                className="input-box"
                placeholder="Your Email Id"
                value={newUser.email}
                onChange={(event) =>
                  setNewUser({ ...newUser, email: event.target.value })
                }
                required
              />
              <input
                type="number"
                className="input-box"
                placeholder="Enter Mobile Number"
              />
              <select className="input-box">
                <option>What was your first car?</option>
                <option>What was your elementary school?</option>
                <option>What was your favourite actor?</option>
              </select>
              <input
                type="text"
                className="input-box"
                placeholder="Enter Answer"
              />
              <input
                type="password"
                className="input-box"
                placeholder="Password"
                value={newUser.pass}
                onChange={(event) =>
                  setNewUser({ ...newUser, pass: event.target.value })
                }
                required
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
            <button type="button" className="btn" onClick={() => openLogin()}>
              I've an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
