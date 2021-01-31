import React, { useState } from "react";
import { Button, Card, Container, Input } from "reactstrap";
import { login } from "../services/auth.js";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (!username || !password) return;
    setLoading(true);

    login(username, password)//.then(
    //   () => {
    //     console.log("this is a promise, right? are you failing?");
    //     props.history.push("/profile");
    //     window.location.reload();
    //   },
    //   (error) => {
    //     const resMessage =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();

    //     setLoading(false);
    //     //setMessage(resMessage);
    //   }
    // );
  };

  return (
    <Container>
      <Card>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div className="form-group">
          <Button
            disabled={loading}
            onClick={handleLogin}
          >
            {loading 
              ? <span className="spinner-border spinner-border-sm"></span>
              : <span>Login</span>
            }
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Login;