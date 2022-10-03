import { InputContainer, FormContainer, CheckboxContainer } from "./styles";
import { Button, Checkbox } from "@mui/material";

export default function Register() {
	return (
		<FormContainer>
			<form>
				<InputContainer>
					<label htmlFor="email">Email:</label>
					<input type="email" name="email" />
				</InputContainer>
				<InputContainer>
					<label htmlFor="username">Username:</label>
					<input type="text" name="username" />
				</InputContainer>
				<InputContainer>
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" />
				</InputContainer>
				<InputContainer>
					<label htmlFor="confirm-password">Confirm Password: </label>
					<input type="password" name="password" />
				</InputContainer>
				<CheckboxContainer>
					<Checkbox />
					<label htmlFor="user-agreement">
						Do you agree with the terms and conditions?
					</label>
				</CheckboxContainer>
				<Button>Register</Button>
			</form>
		</FormContainer>
	);
}
