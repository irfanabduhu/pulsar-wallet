import {
	AccountCircle,
	ArrowDropDown,
	CircleNotifications,
	DarkMode,
	LightMode,
} from "@mui/icons-material";
import { useState } from "react";
import { HeaderContainer, LogoContainer, NavContainer } from "./styles";

export default function Header() {
	const [darkMode, setDarkMode] = useState(true);
	return (
		<HeaderContainer>
			<LogoContainer>
				<a href="/">
					<img src="logo.png" alt="Pulsar" />
				</a>
			</LogoContainer>
			<NavContainer>
				<a href="#notifications">
					<CircleNotifications />
				</a>
				<a href="#profile">
					<AccountCircle />
				</a>
				<a href="#theme">{darkMode ? <LightMode /> : <DarkMode />}</a>
				<a href="#dropdown">
					<ArrowDropDown />
				</a>
			</NavContainer>
		</HeaderContainer>
	);
}
