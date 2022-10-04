import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./home/Homepage";
import Wallet from "./wallet/Wallet";
import ConfirmEmail from "./ConfirmEmail";
import { AppContainer } from "./styles";

export default function App() {
	return (
		<AppContainer>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />}></Route>
					<Route path="/wallet" element={<Wallet />}></Route>
					<Route path="/confirm-email" element={<ConfirmEmail />}></Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</AppContainer>
	);
}
