import styled from "styled-components";

const SelectedWrapper = styled.div`
	${({ $active }) => $active && `background: var(--light); padding: 0.5em; border-radius: 0.75em; &:hover{ box-shadow: inset 0 0 999em #0002 }`}
	display: flex; transition: all 0.125s ease-in-out;
	&>* { width: 100%; margin: 0; }
	& img, & video, & audio { height: fit-content; object-fit: cover; border-radius: 0.5em; aspect-ratio: 1; }	
`;
export default SelectedWrapper;