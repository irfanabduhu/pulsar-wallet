import { LastAddressContainer } from "../styles";
import { Alert, Button, TextField, Tooltip } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import { useState } from "react";

export default function LastAddress() {
	const address = "SAC Lane";

	const [isCopied, setIsCopied] = useState(false);
	async function copyTextToClipboard(text) {
		if ("clipboard" in navigator) {
			return await navigator.clipboard.writeText(text);
		}
	}
	const handleCopyClick = () => {
		// Asynchronously call copyTextToClipboard
		copyTextToClipboard(address)
			.then(() => {
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 1500);
			})
			.catch((err) => {
				console.log(err);
			});
	};

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
				<Tooltip title="Copy" placement="bottom" arrow>
					<Button variant="contained" onClick={handleCopyClick}>
						<ContentCopy />
					</Button>
				</Tooltip>
				{isCopied ? (
					<Alert severity="info" sx={{ marginLeft: 1, height: 32 }}>
						Copied
					</Alert>
				) : (
					""
				)}
			</div>
			<Button variant="contained" sx={{ margin: 2 }}>
				Verify Address
			</Button>
		</LastAddressContainer>
	);
}
