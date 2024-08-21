import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const AddButton = styled(Link)`
    position: fixed;
    bottom: 40px;
    right: 40px;
    border-radius: 50%;
    background-color: green;
    font-size: 40px;
    cursor: pointer;
    width: 64px;
    height: 64px;
    border: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;


    &:hover {
        background-color: #00FF00;
    }
`

