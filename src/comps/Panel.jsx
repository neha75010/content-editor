import styled from 'styled-components'
import Padding from './Padding';
import LBox from './LBox';
import WBox from './WBox';

export default function Panel ({children, $full, $left, ref, ...props}) {
	return <Padding $full={$full}>
		{!$full ?
		<LBox $left={$left} {...props}> {children} </LBox> :
		<WBox ref={ref} {...props}> {children} </WBox>}
	</Padding>
}

export const Center = styled(Panel)`justify-content: center; align-items: center;`;