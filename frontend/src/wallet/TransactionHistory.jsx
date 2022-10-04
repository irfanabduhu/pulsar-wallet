import {
	Table,
	TableCell,
	TableHead,
	TableRow,
	TableContainer,
	TableBody,
} from "@mui/material";
import { TransactionHistoryContainer } from "../styles";

export default function TransactionHistory() {
	const transactions = [
		{
			date: "10 April 2022",
			address: "SAC Lane",
			type: "Credit",
			amount: 1000,
			fee: 2.5,
			confirms: "yes",
			information: "abracadabra",
		},
		{
			date: "10 April 2022",
			address: "SAC Lane",
			type: "Credit",
			amount: 1000,
			fee: 2.5,
			confirms: "yes",
			information: "abracadabra",
		},
		{
			date: "10 April 2022",
			address: "SAC Lane",
			type: "Credit",
			amount: 1000,
			fee: 2.5,
			confirms: "yes",
			information: "abracadabra",
		},
		{
			date: "10 April 2022",
			address: "SAC Lane",
			type: "Credit",
			amount: 1000,
			fee: 2.5,
			confirms: "yes",
			information: "abracadabra",
		},
	];

	return (
		<TransactionHistoryContainer>
			<h2>Last 10 Transactions</h2>
			<TableContainer variant="outlined">
				<Table aria-label="transaction-history">
					<TableHead>
						<TableRow>
							<TableCell>Date</TableCell>
							<TableCell>Address</TableCell>
							<TableCell>Type</TableCell>
							<TableCell>Amount</TableCell>
							<TableCell>Fee</TableCell>
							<TableCell>Confirms</TableCell>
							<TableCell>Information</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{transactions.slice(0, 10).map((t) => (
							<TableRow>
								<TableCell>{t.date}</TableCell>
								<TableCell>{t.address}</TableCell>
								<TableCell>{t.type}</TableCell>
								<TableCell>{t.amount}</TableCell>
								<TableCell>{t.fee}</TableCell>
								<TableCell>{t.confirms}</TableCell>
								<TableCell>{t.information}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</TransactionHistoryContainer>
	);
}
