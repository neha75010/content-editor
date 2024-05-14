import Markdown from "react-markdown";
import styled from "styled-components";

const Md = styled(Markdown)`
	&>p{margin: 0; text-align: ${props => props.$align};}
`;

export default Md;