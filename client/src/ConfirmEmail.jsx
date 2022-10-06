import Header from "./Header";
import { InstructionContainer } from "./styles";

export default function ConfirmEmail() {
	return (
		<div>
			<Header />
			<InstructionContainer>
				<h1>Please confirm your email.</h1>
			</InstructionContainer>
		</div>
	);
}
