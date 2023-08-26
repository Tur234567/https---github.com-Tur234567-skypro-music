import styled from "styled-components";

export const DivWrapper = styled.div`
    width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`;

export const DivContainer = styled.div`
    max-width: 1920px;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
  height: 100Vh;
`;

export const DivMain = styled.div`
    -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const DivMainCenterBlock = styled.div`
    width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`;

export const DivMainCenterBlockH2 = styled.h2`
    font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;