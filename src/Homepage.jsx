import Login from "./Login";
import { HomepageContainer } from "./styles";
import { useState } from "react";
import Register from "./Register";
import { Button } from "@mui/material";

export default function Homepage() {
	const [isLogin, setLoginMode] = useState(true);
	const label1 = isLogin ? "login" : "register";
	const label2 = isLogin ? "register" : "login";

	function toggleMode() {
		setLoginMode(!isLogin);
	}

	return (
		<div>
			<HomepageContainer>
				<h1>
					Welcome to <span>Pulsar Wallet</span>
				</h1>
				<h3>Please enter your credentials to continue</h3>
				<nav>
					<Button disabled>{label1}</Button>
					<Button onClick={toggleMode}>{label2}</Button>
				</nav>
				{isLogin ? <Login /> : <Register />}
			</HomepageContainer>
		</div>
	);
}
