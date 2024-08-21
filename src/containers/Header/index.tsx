import * as S from './styles'

type Props = {
    text: string
}

function Header({text}: Props) {
    return(
    <S.Header>
        <h1>{text}</h1>
    </S.Header>
    )
}

export default Header