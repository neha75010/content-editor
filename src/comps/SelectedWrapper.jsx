import styled from "styled-components";

const SelectedWrapper = styled.div`
	${({ $active }) => $active && `border: 1px solid var(--light); padding: 0.25em;`}
	display: flex;
	&>* { width: 100%; margin: 0; }
	& img, & video, & audio { height: fit-content; object-fit: cover; border-radius: 0.5em; aspect-ratio: 1; }	
`;
export default SelectedWrapper;