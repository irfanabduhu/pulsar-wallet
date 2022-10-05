import { FormContainer } from "../styles";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({ fnForget, errorMessage }) {
	const [forgetMode, setForgetMode] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [valid, setValid] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setValid(isEmail(email));
	}, [email]);

	async function handleSubmit(e) {
		e.preventDefault();

		console.log("Login submitted");

		if (forgetMode) {
			return navigate("/forget-password");
		}

		const { data } = await axios.post("http://localhost:3030/api/login", {
			email,
			password,
		});

		if (data.success) {
			navigate("/wallet", { state: { username: data?.payload?.username } });
		} else {
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
						</a>{" "}
						<br />
					</div>
				)}
				<Button type="submit" variant="contained" disabled={!valid}>
					Submit
				</Button>
			</form>
		</FormContainer>
	);
}
