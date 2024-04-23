import styled from 'styled-components'
import ReactQuill from 'react-quill';

export const Editor = styled(ReactQuill)`
    width: 100%;
    height: 100%;
    .ql-toolbar, .ql-container {border: 0}
`;