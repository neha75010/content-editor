import styled from "styled-components";
import { PiDotsThreeCircleThin, PiXCircleThin } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function DocumentDropdown ({ items }) {
	const [opened, setOpened] = useState(false);
	const dropdown = useRef();
	const opener = useRef();

	useEffect(() => {
		document.addEventListener("mousedown", (e) => {
			if (opened && dropdown.current && !opener.current?.contains(e.target) && !dropdown.current?.contains(e.target)) {
				setOpened(false);
			}
		})
	}, [opened, dropdown, opener]);

	return <DropdownContainer>
		<Opener ref={opener} onClick={() => setOpened(!opened)}>
			{
				!opened ?
				<PiDotsThreeCircleThin size={32} /> :
				<PiXCircleThin size={32} />
			}
		</Opener>
		{opened && <Dropdown ref={dropdown}>
			{items.map(function ({ title, onClick }, i) {
				return <Item key={i} onClick={onClick}>{title}</Item>
			})}
		</Dropdown>}
	</DropdownContainer>
}

const Opener = styled.button`height: 2em; width: fit-content; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; z-index: 999; border-radius: 0.5em 0 0.5em 0; border: 0; background-color: #0000; color: #33f; top:0; right: 0; padding: 0em;`;
const DropdownContainer = styled.div`padding: 0.5em; position: absolute; top: 0; right: 0; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; gap: 0.25em;`;
const Dropdown = styled(motion.div)`border-radius: 0.5em; box-shadow: 0 0 5px #0002; z-index: 999; background-color: white;`;
const Item = styled.div`padding: 0.75em 1.5em; cursor: pointer; font-size: 11px; &:hover{ background-color: #00000006; } &:first-child{ border-radius: 0.5em 0.5em 0 0; } &:last-child{ border-radius: 0 0 0.5em 0.5em; } &:not(:last-child){ border-bottom: 1px solid #0002; }`;