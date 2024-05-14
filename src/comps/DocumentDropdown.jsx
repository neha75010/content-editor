import styled from "styled-components";
import { PiDotsThreeCircleThin, PiXCircleThin } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Container from "./DocumentDropdownContainer";
import Dropdown from "./DocumentDropdownComp";
import Opener from "./Opener";
import Item from "./DocumentDropdownItem";

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

	return <Container>
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
	</Container>
}