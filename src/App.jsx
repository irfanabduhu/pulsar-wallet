import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Wallet from "./Wallet";
import { AppContainer } from "./styles";
import Header from "./Header";

export default function App() {
	return (
		<AppContainer>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />}></Route>
					<Route path="/wallet" element={<Wallet />}></Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</AppContainer>
	);
}
