import { FormContainer } from "./styles";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

export default function Register() {
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
				<TextField
					type="text"
					label="Username"
					size="small"
					required
					fullWidth
					sx={{ margin: 1 }}
				/>
				<TextField
					type="password"
					label="Password"
					size="small"
					required
					fullWidth
					sx={{ margin: 1 }}
				/>
				<TextField
					type="password"
					label="Confirm Password"
					size="small"
					required
					fullWidth
					sx={{ margin: 1 }}
				/>
				<FormControlLabel
					control={<Checkbox />}
					label="Do you agree with the terms and conditions?"
					sx={{ margin: 1 }}
				></FormControlLabel>
				<Button type="submit" variant="contained">
					Register
				</Button>
			</form>
		</FormContainer>
	);
}
