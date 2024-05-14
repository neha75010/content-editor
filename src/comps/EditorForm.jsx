import { useContext, useEffect, useState } from "react";
import Label from "./EditorFormLabel";
import { AppContext } from "../providers/AppProvider";
import { Muted, MutedSmall } from "./Muted";
import RmvElement from "./ElementRmv";
import SwpElement from "./ElementSwp";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa6";
import AlignInput from "./EditorFormAlignInput"

const input = {
	input : ({ ...props }) => <input type="text" { ...props } />,
	textarea : ({ ...props }) => <textarea { ...props } />,
	color : ({ ...props }) => <input type="color" { ...props } />,
	align : ({ onChange, value }) => {
		const aligns = [{name:'left', Icon: FaAlignLeft}, {name:'center', Icon: FaAlignCenter}, {name:'right', Icon: FaAlignRight}];

		return <AlignInput>
			{aligns.map((align, i) => <button key={i} onClick={() => onChange({ target: { value: align.name } })}><align.Icon /></button>)}
		</AlignInput>
	},
	src : ({ autoFocus, onChange, value, placeholder }) => {
		const [vl, setVl] = useState(value);
		useEffect(() => { onChange({ target: { value: vl } }); }, [vl]);

		const file64 = e => {
			var reader = new FileReader();
			reader.readAsDataURL(e.target.files[0]);
			reader.onload = () => setVl(reader.result);
			reader.onerror = (error) => console.log('Error: ', error);
		}

		return <>
			<input type="hidden" value={vl} onChange={onChange} />
			<input type="text" value={vl} onChange={e => setVl(e.target.value)} />
			<input type="file" onChange={file64} multiple={false} accept="image/*" />
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
		<RmvElement index={selected} onClick={() => select(null)} />
	</>;
}