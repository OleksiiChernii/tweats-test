import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    width: 400px;
    padding: 10px;

    @media(min-width: 768px){
        width: 768px;
        padding: 10px 0px;
    }

    @media(min-width: 1280px){
        width: 1280px;
    }
`;