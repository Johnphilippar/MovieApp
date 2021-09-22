import styled from 'styled-components';

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    min-width: 200px;
    width: 25%;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 20px auto;
    transition: all 0.5s;
    outline: none;
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`

