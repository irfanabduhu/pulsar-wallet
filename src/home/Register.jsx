import { FormContainer } from "../styles";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { isEmail, isAlpha, isStrongPassword } from "validator";

export default function Register() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [valid, setValid] = useState(false);
	const [marked, setMarked] = useState(false);

	function registerUser(e) {
		e.preventDefault();
	}

	useEffect(() => {
		setValid(
			isEmail(email) &&
				isValidUsername(username) &&
				isValidPassword(password) &&
				password === password2 &&
				marked
		);
	}, [email, username, password, password2, marked]);

	function isValidUsername(username) {
		return (
			username.length >= 8 &&
			isAlpha(username) &&
			/[a-z]/.test(username) &&
			/[A-Z]/.test(username)
		);
	}
	function isValidPassword(password) {
		return isStrongPassword(password, {
			minLength: 12,
			minLowercase: 1,
			minUppercase: 1,
			minNumbers: 1,
			minSymbols: 1,
		});
		// Example: aB1@abracadabra
	}

	return (
		<FormContainer>
			<form onSubmit={registerUser}>
				<TextField
					type="email"
					label="Email"
					size="small"
					required
					fullWidth
					sx={{ margin: 1 }}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					helperText="Please enter a valid email."
				/>
				<TextField
					type="text"
					label="Username"
					size="small"
					required
					fullWidth
					sx={{ margin: 1 }}
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					helperText="Must include a lower and capital letter, at least 10 characters"
				/>
				<TextField
					type="password"
					label="Password"
					size="small"
					required
					fullWidth
					sx={{ margin: 1 }}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					helperText="Must include at least a lowercase letter, an uppercase letter, a number, and a symbol. Must have at least 12 characters."
				/>
				<TextField
					type="password"
					label="Confirm Password"
					size="small"
					required
					fullWidth
					sx={{ margin: 1 }}
					value={password2}
					onChange={(e) => setPassword2(e.target.value)}
				/>
				<FormControlLabel
					control={
						<Checkbox checked={marked} onChange={(e) => setMarked(!marked)} />
					}
					label="Do you agree with the terms and conditions?"
					sx={{ margin: 1 }}
				></FormControlLabel>
				<Button type="submit" variant="contained" disabled={!valid}>
					Register
				</Button>
			</form>
		</FormContainer>
	);
}
