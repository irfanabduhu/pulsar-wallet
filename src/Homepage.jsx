import Login from "./Login";
import { HomepageContainer } from "./styles";
import { useState } from "react";
import Register from "./Register";
import { Button } from "@mui/material";
import Header from "./Header";

export default function Homepage() {
	const [isLogin, setLoginMode] = useState(true);
	const [isForgetMode, setForgetMode] = useState(false);
	const label1 = isLogin ? "login" : "register";
	const label2 = isLogin ? "register" : "login";

	function toggleMode() {
		setLoginMode(!isLogin);
		setForgetMode(false);
	}

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
						<h3>Please enter your credentials to continue</h3>
					)
				) : (
					<h3>Please enter your information to create an account</h3>
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
