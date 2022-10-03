import { FooterContainer, LogoContainer } from "./styles";

export default function Footer() {
	return (
		<FooterContainer>
			<LogoContainer>
				<img src="logo.png" alt="Pulsar" />
			</LogoContainer>
			<p>
				&copy; All rights reserved by Pulsar {new Date().getFullYear()}
			</p>
			<span>Roadmap</span>
		</FooterContainer>
	);
}
