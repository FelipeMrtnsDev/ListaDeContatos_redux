import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    html {
        overflow-y: hidden;
    }
`

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1024px;
`

export default EstiloGlobal