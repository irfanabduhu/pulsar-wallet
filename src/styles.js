import styled from "@emotion/styled";

export const AppContainer = styled.div`
	height: 100vh;
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
		margin: 2rem 0;
	}

	& h3 {
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 2rem;
	}

	& span {
		color: midnightblue;
	}

	& nav {
		margin: auto;
		width: 500px;
		display: flex;
		justify-content: flex-end;
	}

	& nav a {
		display: inline-block;
		padding-left: 10px;
		color: black;
		text-transform: capitalize;
	}

	& button {
		margin-left: 10px;
	}

	& button:disabled {
		background-color: midnightblue;
		color: white;
	}
`;

export const WalletContainer = styled.div`
	width: 80%;
	margin: 0px auto;
	padding: 20px;
	background-color: green;
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
	width: 500px;
	margin: auto;
	& form {
		margin: 20px auto;
	}

	& button {
		display: block;
		margin: auto;
		width: 100px;
		border: 1px solid midnightblue;
		background-color: white;
		color: midnightblue;
	}

	& a {
		color: midnightblue;
		display: block;
		text-align: right;
	}
`;

export const InputContainer = styled.div`
	display: block;
	margin-bottom: 10px;

	& label {
		display: inline-block;
		width: 140px;
		text-align: right;
		margin-right: 10px;
	}

	& input {
		width: 350px;
		padding: 10px 20px;
		border: 1px solid midnightblue;
		border-radius: 3px;
	}
`;

export const CheckboxContainer = styled.div`
	color: midnightblue;
	padding-left: 130px;
	margin-bottom: 10px;

	& input {
		margin-right: 12px;
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
	position: absolute;
	left: 0;
	bottom: 0;
`;
