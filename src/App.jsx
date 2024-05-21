import { useState } from 'react'
import Document from './comps/Document'
import AddElement from './comps/AddElement'
import { GStyle } from './comps/GStyle'
import Editor from './comps/Editor'
import Components from './comps/Components'
import './fonts/Raleway/.css';
import Router from './comps/Router'

function App() {
    return (
        <>
            <GStyle />
            <Router />
        </>
    )
}

export default App
