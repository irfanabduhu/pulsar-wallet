import { LastAddressContainer } from "./styles";
import {
	FormControl,
	InputLabel,
	Input,
	Button,
	TextField,
} from "@mui/material";
import { ContentCopy } from "@mui/icons-material";

export default function LastAddress() {
	const address = "SAC Lane";

	return (
		<LastAddressContainer>
			<div>
				<TextField
					type="text"
					variant="outlined"
					size="small"
					sx={{ margin: 2 }}
					value={address}
					disabled
				/>
				<Button variant="contained">
					<ContentCopy />
				</Button>
			</div>
			<Button variant="contained" sx={{ margin: 2 }}>
				Verify Address
			</Button>
		</LastAddressContainer>
	);
}
