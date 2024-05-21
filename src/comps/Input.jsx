import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const base = css`
    border: 0;
    border-radius: 999rem;
	padding: 0.66rem 1rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	transition: all 0.25s ease;

	&:disabled {
		color: grey;
	}

	&:not(:has(input:not([type="file"]))):hover{
		box-shadow: inset 999em 0 0 0 var(--secondary);
	}

	&:not(:has(input:not([type="file"]))):focus{
		box-shadow: inset 0 0 0 1px var(--secondary);
	}
`;

const textZone = css`
	background: var(--inputsColor);
	color: var(--inputsText);
`;

export const Button = styled(motion.button)` display: flex; align-items: center; justify-content: center; gap: 0.5rem; ${base} `;
export const ButtonPrimary = styled(Button)` background: var(--primary); color: var(--primaryText); `;
export const ButtonSm = styled(Button)` padding: 0.4rem; background: var(--inputsColor); color: var(--inputsText); `;

export const Label = styled(motion.label)` display: flex; align-items: center; justify-content: center; gap: 0.5rem; ${base} `;
export const LabelPrimary = styled(Label)` background: var(--primary); color: var(--primaryText); `;
export const LabelInput = styled(Label)` background: var(--inputsColor); color: var(--inputsText); `;
export const Input = styled(motion.input)` ${base}; ${textZone}; `;
export const Select = styled(motion.select)` ${base}; ${textZone}; `;
export const Textarea = styled(motion.textarea)` resize: none; ${base}; ${textZone}; `;