import { useContext } from "react";
import Label from "./Label";
import { AppContext } from "../providers/AppProvider";
import { Muted, MutedSmall } from "./Muted";
import RmvElement from "./RmvElement";
import SwpElement from "./SwpElement";

const input = {
	input : ({ ...props }) => <input type="text" { ...props } />,
	textarea : ({ ...props }) => <textarea { ...props } />,
	color : ({ ...props }) => <input type="color" { ...props } />,
};

export default function EditorForm() {
	const { selected, select, useDoc : { document, elements, updElement } } = useContext(AppContext);
	const form = elements?.[document[selected]?.type]?.editor;

	return <>
		<Label> <MutedSmall>Ligne</MutedSmall> <SwpElement index={selected} onClick={select} onChange={e => select(e.target.value)} /> </Label>
		{form.map(({ type, key, label }, i) => {
			const Comp = input[type];
			return <Label key={i}>
				<MutedSmall>{label}</MutedSmall>
				<Comp autoFocus onChange={event => updElement(selected, key, event.target.value !== "" ? event.target.value : undefined)} value={document[selected][key] ?? ""} placeholder={label} />
			</Label>;
		})}
		<Label> <RmvElement index={selected} onClick={() => select(null)} /> </Label>
	</>;
}