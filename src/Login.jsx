import { FormContainer } from "./styles";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Login({ fnForget }) {
	const [forgetMode, setForgetMode] = useState(false);
	return (
		<FormContainer>
			<form>
				<TextField
					type="email"
					label="Email"
					size="small"
					required
					fullWidth
					sx={{ margin: 1 }}
				/>
				{forgetMode ? (
					<div></div>
				) : (
					<div>
						{" "}
						<TextField
							type="password"
							label="Password"
							size="small"
							required
							fullWidth
							sx={{ margin: 1 }}
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
				<Button type="submit" variant="contained">
					Submit
				</Button>
			</form>
		</FormContainer>
	);
}
