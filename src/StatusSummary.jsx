import { SummaryContainer, InfoContainer } from "./styles";
import { CheckCircle } from "@mui/icons-material";

export default function StatusSummary() {
	const balance = 3.422314311;
	return (
		<SummaryContainer>
			<InfoContainer>
				<h3>Current Balance:</h3>
				<h3>{balance.toFixed(6)} PLSR</h3>
			</InfoContainer>
			<InfoContainer>
				<h3>Network Status</h3>
				<h1>
					OK <CheckCircle style={{ color: "green" }} />
				</h1>
				<p>Last Block: 0.00000</p>
				<p>Last Check: 00:00 PM</p>
			</InfoContainer>
		</SummaryContainer>
	);
}
