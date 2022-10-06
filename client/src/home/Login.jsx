import { FormContainer } from "../styles";
import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login({ fnForget }) {
  const [forgetMode, setForgetMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const captchaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setValid(isEmail(email));
  }, [email]);

  async function handleSubmit(e) {
    e.preventDefault();

    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    if (forgetMode) {
      return navigate("/forget-password");
    }

    try {
      const PORT = process.env.PORT || 3001;
      const { data } = await axios({
        method: "POST",
        url: `http://localhost:${PORT}/api/login`,
        data: {
          email,
          password,
          token,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      });

      if (data.success) {
        navigate("/wallet", { state: { username: data?.payload?.username } });
      }
    } catch (err) {
      console.error(err);
      navigate("/", { state: { failed: "login" } });
    }
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email"
          size="small"
          fullWidth
          required
          sx={{ margin: 1 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {forgetMode ? (
          <div></div>
        ) : (
          <div>
            <TextField
              type="password"
              label="Password"
              size="small"
              required
              fullWidth
              sx={{ margin: 1 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a
              href="#forget"
              onClick={() => {
                setForgetMode(true);
                fnForget(true);
              }}
            >
              Forgot Password?
            </a>
            <br />
            <ReCAPTCHA
              sitekey="6LdZwVciAAAAAB6QdY0Usriz7Zx0Nw1w3hYmYGQ6"
              ref={captchaRef}
            />
          </div>
        )}
        <Button type="submit" variant="contained" disabled={!valid}>
          Submit
        </Button>
      </form>
    </FormContainer>
  );
}
