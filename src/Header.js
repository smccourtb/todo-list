import styled from 'styled-components';


const Container = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: 100%;
    padding: 1em 0em;
    font-size: .75em;
    letter-spacing: .5em;
    color: black;
    margin-bottom: 3em;
`;


export default function Header() {
    return(
        <Container>
            <h1>TODO</h1>
            <p>DM</p>
        </Container>
        )
}