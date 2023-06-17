import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    width: 400px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media(min-width: 768px){
        width: 768px;
        padding: 20px 0px;
        gap: 4px;
    }

    @media(min-width: 1280px){
        width: 1280px;
        padding: 20px 0px;
        gap: 10px 40px;
    }
`;