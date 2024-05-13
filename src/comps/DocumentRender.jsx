import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../providers/AppProvider";

export default function DocumentRender({ targetRef }) {
	const { useDoc : { document, elements }, select, selected } = useContext(AppContext);

	return <Doc ref={targetRef}>
		{Object.entries(document).map(([i, { type, ...props }]) => {
			const { Render } = elements[type];
			return <SelectedWrapper onClick={() => (selected === i) ? select(null) : select(i)} key={i} $active={selected === i}>
				{
					Object.values(props).filter(prop => prop !== undefined).length === 0 ?
						<Empty key={i}>Cliquez pour éditer</Empty> :
						<Render key={i} {...props} />
				}
			</SelectedWrapper>
		})}
	</Doc>
}

const Doc = styled.div`display: flex; flex-direction: column; gap: 0.5em; overflow: visible; width: 100%;`;
const Empty = styled.div`background-color:#eee; color: #bbb; width: 100%; border-radius: 0.5em; padding: 0.5em`;
const SelectedWrapper = styled.div`
	${({ $active }) => $active && `border: 1px solid #22f; padding: 0.25em;`}
	display: flex;
	&>* { width: 100%; margin: 0; }
	& img, & video, & audio { height: fit-content; object-fit: cover; border-radius: 0.5em; aspect-ratio: 1; }	
`;