import Box from "./Box";

const LBox = styled(Box)`background-color: #333; color: #fff; border-radius: ${({$left, $full}) => ($left) ? "0.5em 0 0 0.5em" : '0 0.5em 0.5em 0'}; padding: 2em;`;
export default LBox;