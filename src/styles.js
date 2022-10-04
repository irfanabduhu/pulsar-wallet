import styled from "@emotion/styled";

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const HomepageContainer = styled.div`
	margin: 0px auto;
	padding: 20px;

	& h1 {
		font-size: 3rem;
		text-align: center;
		margin: 0.5rem 0;
	}

	& h3 {
		font-size: 1.5rem;
		text-align: center;
		margin: 0.5rem 0 1rem 0;
	}

	& span {
		color: midnightblue;
	}

	& nav {
		margin: auto;
		width: 450px;
		display: flex;
		justify-content: flex-end;
	}

	& nav button {
		margin-left: 10px;
	}
`;

export const WalletContainer = styled.div`
	width: 90%;
	margin: 0px auto;
	padding: 20px;

	& > h3 {
		margin: 1.5rem;
		text-align: center;
	}
`;

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: midnightblue;
	color: white;
`;

export const LogoContainer = styled.div`
	display: block;
	& img {
		width: 40px;
		height: 40px;
	}
`;

export const NavContainer = styled.nav`
	& > a {
		color: white;
		padding-left: 20px;
	}
	& > a:hover {
		color: #ffeedd;
	}
`;

export const FormContainer = styled.div`
	width: 450px;
	margin: 20px auto 50px auto;

	& div {
		margin: 5px auto;
	}

	& button {
		display: block;
		margin: 0.5rem auto;
	}

	& a {
		color: midnightblue;
		display: block;
		text-align: right;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: midnightblue;
	color: white;
	width: 100%;
	padding: 10px 20px;
	position: fixed;
	left: 0;
	bottom: 0;
`;

export const SummaryContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
`;

export const InfoContainer = styled.div`
	padding: 20px 40px;
	border: 2px solid midnightblue;
	border-radius: 5px;
`;

export const SendFundContainer = styled.div`
	width: 600px;
	margin: 2rem auto;
	text-align: center;
	color: midnightblue;
`;

export const LastAddressContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& div {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
`;

export const TransactionHistoryContainer = styled.div`
	margin: 20px auto;
	margin-bottom: 50px;
`;