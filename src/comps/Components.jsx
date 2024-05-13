import styled from "styled-components";
import AddElement from "./AddElement";
import Panel from "./Panel";
import Title from "./Title";

export default function Components () {
	return <Panel $left={true}>
		<Title>Ajouter un élément</Title>
		<ComponentsGrid>
			<AddElement type={"title"} />
			<AddElement type={"title2"} />
			<AddElement type={"title3"} />
			<AddElement type={"title4"} />
			<AddElement type={"text"} />
			<AddElement type={"small"} />
			<AddElement type={"link"} />
			<AddElement type={"hr"} content={"___"} />
			<AddElement type={"image"} />
			<AddElement type={"video"} />
			<AddElement type={"jumbotron"} />
		</ComponentsGrid>
	</Panel>
}

const ComponentsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10px;
	& button {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.75em;
		gap: 0.25em;
		border: 0;
		border-radius: 0.25em;
		font-size: 8px;

		&:hover {
			background-color: #ddd;
		}
	}
`