import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    background-color: #063447;
`

export const Info = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #063447;
    color: #FFFFFF;
`

export const Title = styled.div `
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #FFFFFF;
    text-align: center;
    margin: 3rem 0 1rem 0;

    @media (max-width: 1024px) {
        font-size: 32px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1.5rem 0 1rem 0;
    }
`

export const InfoText = styled.div `
    font-size: 16px;
    color: #FFFFFF;
    font-weight: 200;
    text-align: justify;
    margin: 0 10rem 2rem 10rem;

    @media (max-width: 1024px) {
        font-size: 14px;
        margin: 0 3rem 1rem 3rem;
        letter-spacing: -0.29px;
    }
`

export const InfoText2 = styled.div `
    letter-spacing: -0.32px;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
        font-size: 16px;
    }
`

export const SideImage = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 30rem;
        margin: 2rem;
    }

    @media (max-width: 1024px) {
        img {
            width: 18rem;
        }
    }
`

export const ButtonCV = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

    @media (max-width: 1024px) {
        margin-bottom: 3rem;
    }
`