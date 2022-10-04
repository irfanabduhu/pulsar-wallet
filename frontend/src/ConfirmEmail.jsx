import Header from "./Header";
import { EmailConfirmationContainer } from "./styles";

export default function ConfirmEmail() {
	return (
		<div>
			<Header />
			<EmailConfirmationContainer>
				<h1>Please confirm your email.</h1>
			</EmailConfirmationContainer>
		</div>
	);
}
