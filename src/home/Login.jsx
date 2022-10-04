import { FormContainer } from "../styles";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { isEmail } from "validator";

export default function Login({ fnForget }) {
	const [forgetMode, setForgetMode] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [valid, setValid] = useState(false);

	useEffect(() => {
		setValid(isEmail(email));
	}, [email]);

	return (
		<FormContainer>
			<form>
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
