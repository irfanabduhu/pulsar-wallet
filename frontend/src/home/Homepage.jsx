import Login from "./Login";
import { HomepageContainer } from "../styles";
import { useState } from "react";
import Register from "./Register";
import { Button } from "@mui/material";
import Header from "../Header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Homepage() {
	const [isLogin, setLoginMode] = useState(true);
	const [isForgetMode, setForgetMode] = useState(false);
	const label1 = isLogin ? "login" : "register";
	const label2 = isLogin ? "register" : "login";
	const location = useLocation();
	const [errorMessage, setErrorMessage] = useState("");

	function toggleMode() {
		setLoginMode(!isLogin);
		setForgetMode(false);
		setErrorMessage("");
	}

	useEffect(() => {
		if (location.state?.failed === "login") {
			setErrorMessage("Login failed. Please try again.");
			setLoginMode(true);
		} else if (location.state?.failed === "registration") {
			setErrorMessage("Registration failed. Please try again.");
			setLoginMode(false);
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<Header portalMode={false} />
			<HomepageContainer>
				<h1>
					Welcome to <span>Pulsar Wallet</span>
				</h1>
				{isLogin ? (
					isForgetMode ? (
						<h3>An e-mail will be sent to reset your password</h3>
					) : (
						<h3 className={errorMessage ? "error" : ""}>
							{errorMessage
								? errorMessage
								: "Please enter your credentials to continue"}
						</h3>
					)
				) : (
					<h3 className={errorMessage ? "error" : ""}>
						{errorMessage
							? errorMessage
							: "Please enter your information to create an account"}
					</h3>
				)}
				<nav>
					<Button disabled>{label1}</Button>
					<Button variant="contained" onClick={toggleMode}>
						{label2}
					</Button>
				</nav>
				{isLogin ? <Login fnForget={setForgetMode} /> : <Register />}
			</HomepageContainer>
		</div>
	);
}
