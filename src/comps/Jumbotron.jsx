import styled from "styled-components";

const Jumbotron = styled.div` display: flex; flex-direction: column; gap: 0.25em; justify-content: center; align-items: flex-start; background-color: ${({$bg}) => $bg}; color: ${({$clr}) => $clr}; padding: 1em; border-radius: 0.5em; `;

export default Jumbotron;