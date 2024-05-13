import styled from 'styled-components'

const Padding = styled.div`padding: ${({$full}) => $full ? "0" : '1rem 0'}; width: ${({$full}) => $full ? "100%" : '56%'}; height: 100%; display: flex; overflow: hidden; position: relative;`;
const Box = styled.div`box-shadow: 0 0 1em #0008; width: 100%; height: 100%; overflow: hidden auto; display: flex; flex-direction: column; gap: 0.5em; &>*, &>div>* { margin: 0 }`;
const WBox = styled(Box)`background-color: #fff; color: #111; border-radius: 0.5em !important; padding: 3em;`;
const LBox = styled(Box)`background-color: #333; color: #fff; border-radius: ${({$left, $full}) => ($left) ? "0.5em 0 0 0.5em" : '0 0.5em 0.5em 0'}; padding: 2em;`;

export default function Panel ({children, $full, $left, ref, ...props}) {
	return <Padding $full={$full}>
		{!$full ? <LBox $left={$left} {...props}> {children} </LBox> : <WBox ref={ref} {...props}> {children} </WBox>}
	</Padding>
}

export const Center = styled(Panel)`justify-content: center; align-items: center;`;