import styled from 'styled-components'

export const Informacoes = styled.input`
    width: 50%;
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 16px;
`

export const MainContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AdicionarContato = styled.button`
    width: 50%;
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 16px;
    background-color: lime;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: green;
    }
`
