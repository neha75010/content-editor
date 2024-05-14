import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa6";
import AlignInput from "../comps/EditorFormAlignInput"
import { useState, useEffect } from "react";

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

export default input;