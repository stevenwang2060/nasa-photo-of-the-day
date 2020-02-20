import styled from "styled-components";

export const Page = styled.div`
    background-color: #DCDCDC;
    padding: 0 5% 5% 5%;
    font-family: 'Comfortaa', cursive;
`;

export const Head = styled.div`
    background-color: #696969; 
    color: #F0FFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    margin-bottom: 2%;
    box-shadow: 3px 8px 8px #696969;
`;

export const HeadTitle = styled.h1`
    color: #E0FFFF;
    font-size: 3rem;
    font-family: 'Cabin Sketch', cursive;
    margin-left: 6%;
`;

export const HeadDates = styled.div`
    text-align: center;
`;

export const Image = styled.img`
    width: 80%;
    margin: 2% auto 0;
    margin-bottom: 5%;
    border-radius: 25px;
    border: 5px outset #696969;
    box-shadow: 15px 20px 20px #696969;
`;

export const TextBox = styled.div`
    margin: 2% auto
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2%;
    border-radius: 20%;
    border: 5px outset #696969;
    background-color: #f2f2f2;
    box-shadow: 15px 20px 20px #696969;
`;

export const InfoBox = styled.div`
    margin-right: 8%;
`;

export const ImageTitle = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
`;

export const ImageInfo = styled.p`
    font-size: 1.2rem;
`;

export const ImageExplanation = styled.p`
    width: 100%;
    text-align: left;
`;