import styled from "styled-components";

export const ListWrapper = styled.div`
    display: grid;
    grid-template-rows: 200px 100px 100px 1fr 200px;
`;

export const ListImage = styled.div`
    grid-row: 1/2;
    background-image: url('/back.jpg');
    background-size: cover;
`;

export const ListTitle = styled.div`
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: black;
    h3 {
        font-size: 32px;
        font-weight: 800;
        color: white;
    }
`;

export const ListCategory = styled.div`
    grid-row: 3/4;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: black;
    overflow: scroll;
    h3 {
        font-size: 28px;
        font-weight: 800;
        color: white;
    }
`;

export const ListContent = styled.div`
    grid-row: 4/5;
`;

export const ListPage = styled.div`
    grid-row: 5/6;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;