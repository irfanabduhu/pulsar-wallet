import { InputContainer, FormContainer } from "./styles";
import { Button } from "@mui/material";

export default function Login() {
	return (
		<FormContainer>
			<form>
				<InputContainer>
					<label htmlFor="email">Email:</label>
					<input type="email" name="email" />
				</InputContainer>
				<InputContainer>
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" />
				</InputContainer>
				<a href="#forgot">Forgot Password?</a> <br />
				<Button>Submit</Button>
			</form>
		</FormContainer>
	);
}
