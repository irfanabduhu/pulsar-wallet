import LastAddress from "./LastAddress";
import SendFund from "./SendFund";
import StatusSummary from "./StatusSummary";
import { WalletContainer } from "../styles";
import TransactionHistory from "./TransactionHistory";
import { Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "../Header";

export default function Wallet({ fnMode }) {
	const location = useLocation();

	return (
		<div>
			<Header portalMode={true} />
			<WalletContainer>
				<h1>Pulsar Wallet Portal</h1>
				<h3>Hello, {location.state.username}</h3>
				<StatusSummary />
				<SendFund />
				<Divider />
				<LastAddress />
				<Divider />
				<TransactionHistory />
			</WalletContainer>
		</div>
	);
}
