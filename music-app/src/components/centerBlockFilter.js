import styled from "styled-components";

export const DivParent = styled.div`
`;

export const DivCenterBlockFilter = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 51px;
`;

export const DivFilterTitle = styled.div`
   font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`;

export const DivFilterButton = styled.div`
   font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;

    &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`;

export const DivAuthor = styled.div`
    position: fixed;
`;


export const DivAuthorContent = styled.div`
    padding: 30px;
    overflow: scroll;
    background: #313131;
    border-radius: 12px;

    &::-webkit-scrollbar {
    width: 4px;
    height: 0px;
    border-radius: 10px;
    background-color: #4B4949;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ffffff;
      width: 4px;
      height: 4px;
    }
`;