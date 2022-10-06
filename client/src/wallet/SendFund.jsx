import { SendFundContainer, FormContainer } from "../styles";
import { Button, TextField } from "@mui/material";

export default function SendFund() {
	return (
		<SendFundContainer>
			<h2>Send Funds:</h2>
			<FormContainer>
				<TextField
					type="email"
					variant="outlined"
					size="small"
					label="Address"
					fullWidth
					sx={{ margin: 1 }}
				/>
				<TextField
					type="number"
					variant="outlined"
					size="small"
					label="Amount"
					fullWidth
					sx={{ margin: 1 }}
				/>
				<Button variant="contained" size="medium">
					Submit
				</Button>
				<Button variant="contained" size="small">
					Donate to developers
				</Button>
			</FormContainer>
		</SendFundContainer>
	);
}
