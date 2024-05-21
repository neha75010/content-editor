import styled from 'styled-components'
const Loader = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	div {
		height: 200px;
		aspect-ratio: 1;
		border-radius: 999em;
		border: 10px solid #fff4;
		border-top: 10px solid #fff;
		animation: spin 1s linear infinite;
		justify-self: center;
		@keyframes spin {
			0% { transform: rotate(0deg); }
			100% { transform: rotate(360deg); }
		}
	}
`;

export default Loader;