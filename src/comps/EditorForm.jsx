import { useContext, useEffect, useState } from "react";
import Label from "./EditorFormLabel";
import { AppContext } from "../providers/AppProvider";
import { Muted, MutedSmall } from "./Muted";
import RmvElement from "./ElementRmv";
import SwpElement from "./ElementSwp";
import input from "../config/inputs";

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
		<RmvElement index={selected} onClick={() => select(null)} />
	</>;
}