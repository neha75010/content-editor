import styled from "styled-components";

const Body = styled.div`
	display:flex;
	flex-direction:column;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	
	&>section{
		display:flex;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
`;

export default Body;