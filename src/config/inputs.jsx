import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa6";
import AlignInput from "../comps/EditorFormAlignInput"
import { useState, useEffect } from "react";
import file64 from "../functions/file64";

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
	src : ({ autoFocus, onChange, value, placeholder, mime }) => {
		const [vl, setVl] = useState(value);
		useEffect(() => { onChange({ target: { value: vl } }); }, [vl]);

		return <>
			<input type="hidden" value={vl} onChange={onChange} />
			<input type="text" value={vl} onChange={e => setVl(e.target.value)} />
			<input type="file" onChange={e => file64(e, setVl)} multiple={false} accept={mime} />
		</>
	},
};

export default input;