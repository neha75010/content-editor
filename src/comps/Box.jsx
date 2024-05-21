import styled from "styled-components";

const Box = styled.div`
	box-shadow: 0 0 1em #0008;
	width: 50%;
	height: 100%;
	overflow: hidden auto;
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 1em;
	border-radius: 0.5em;

	.head {
		display: flex;
		gap: 0.5em;

		input {
			width: 100%;
		}

		button {
			white-space: nowrap;
		}
	}

	.body{
		display: flex;
		flex-direction: column;
		border-radius: 0.5em;
		background-color: #1b1b1b;
		height: 100%;

		a {
			display: flex;
			padding: 1em;
			transition: background-color 0.25s ease-in-out;
			text-decoration: none;
			font-size: 13px;
			flex-direction: column;
			color: #fff8;

			& > div {
				display: flex;
				justify-content: space-between;
			}

			&:hover {
				background-color: #0002;
				color: #fff;
			}

			&:not(:last-child) {
				border-bottom: 1px solid #fff2
			}
		}
	}
`;

export default Box;