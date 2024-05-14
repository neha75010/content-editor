import { useContext, useEffect, useState } from "react";
import Label from "./Label";
import { AppContext } from "../providers/AppProvider";
import { Muted, MutedSmall } from "./Muted";
import RmvElement from "./RmvElement";
import SwpElement from "./SwpElement";

const input = {
	input : ({ ...props }) => <input type="text" { ...props } />,
	textarea : ({ ...props }) => <textarea { ...props } />,
	color : ({ ...props }) => <input type="color" { ...props } />,
	src : ({ autoFocus, onChange, value, placeholder }) => {
		var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
		const [vl, setVl] = useState(!base64regex.test(value) ? value : "");

		useEffect(() => {
			onChange({ target: { value: vl } });
		}, [vl]);

		return <>
			<input type="hidden" value={vl} onChange={onChange} />
			<input type="text" onChange={e => setVl(e.target.value)} />
			<input type="file" onChange={e => {
				var reader = new FileReader();
				reader.readAsDataURL(e.target.files[0]);
				reader.onload = () => setVl(reader.result);
				reader.onerror = (error) => console.log('Error: ', error);
			}} multiple={false} accept="image/*" />
		</>
	},
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