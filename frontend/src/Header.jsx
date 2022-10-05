import {
	AccountCircle,
	ArrowDropDown,
	CircleNotifications,
	DarkMode,
	Language,
	LightMode,
	Logout,
	Settings,
	Shop,
} from "@mui/icons-material";
import { IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, LogoContainer, NavContainer } from "./styles";

export default function Header({ portalMode = false }) {
	const [darkMode, setDarkMode] = useState(true);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const menuExpr = (
		<Menu
			anchorEl={anchorEl}
			id="account-menu"
			open={open}
			onClose={handleClose}
			onClick={handleClose}
			PaperProps={{
				elevation: 0,
				sx: {
					overflow: "visible",
					filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
					mt: 1.5,
					"& .MuiAvatar-root": {
						width: 32,
						height: 32,
						ml: -0.5,
						mr: 1,
					},
					"&:before": {
						content: '""',
						display: "block",
						position: "absolute",
						top: 0,
						right: 14,
						width: 10,
						height: 10,
						bgcolor: "background.paper",
						transform: "translateY(-50%) rotate(45deg)",
						zIndex: 0,
					},
				},
			}}
			transformOrigin={{ horizontal: "right", vertical: "top" }}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
		>
			<MenuItem>
				<ListItemIcon>
					<Shop fontSize="small" />
				</ListItemIcon>
				Market
			</MenuItem>
			<MenuItem>
				<ListItemIcon>
					<Language fontSize="small" />
				</ListItemIcon>
				Languages
			</MenuItem>
			{portalMode ? (
				<div>
					<MenuItem>
						<ListItemIcon>
							<Settings fontSize="small" />
						</ListItemIcon>
						Setting
					</MenuItem>
					<Link to="/">
						<MenuItem>
							<ListItemIcon>
								<Logout fontSize="small" />
							</ListItemIcon>
							Log Out
						</MenuItem>
					</Link>
				</div>
			) : (
				""
			)}
		</Menu>
	);

	return (
		<HeaderContainer>
			<LogoContainer>
				<a href="/">
					<img src="logo.png" alt="Pulsar" />
				</a>
			</LogoContainer>
			<NavContainer>
				<IconButton>
					<CircleNotifications htmlColor="white" />
				</IconButton>
				<IconButton>
					<AccountCircle htmlColor="white" />
				</IconButton>
				<IconButton onClick={() => setDarkMode(!darkMode)}>
					{darkMode ? (
						<LightMode htmlColor="white" />
					) : (
						<DarkMode htmlColor="white" />
					)}
				</IconButton>
				<IconButton
					onClick={handleClick}
					aria-controls={open ? "account-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
				>
					<ArrowDropDown htmlColor="white" />
				</IconButton>
				{menuExpr}
			</NavContainer>
		</HeaderContainer>
	);
}