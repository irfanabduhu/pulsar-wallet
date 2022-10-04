import LastAddress from "./LastAddress";
import SendFund from "./SendFund";
import StatusSummary from "./StatusSummary";
import { WalletContainer } from "../styles";
import TransactionHistory from "./TransactionHistory";
import { Divider } from "@mui/material";
import Header from "../Header";

export default function Wallet({ fnMode }) {
	return (
		<div>
			<Header portalMode={true} />
			<WalletContainer>
				<h1>Pulsar Wallet Portal</h1>
				<h3>Hello, [Username]</h3>
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
