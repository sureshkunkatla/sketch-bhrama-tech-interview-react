import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-color: #000;
  height: 60px;
`;
export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;
export const SketchBrahmaText = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  margin: 0px;

  @media (max-width: 450px) {
    text-align: center;
  }
`;
export const HeaderRight = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    display: none;
  }
`;
export const ButtonAddNew = styled.button`
  background-color: #000;
  border: 1px solid #fff;
  padding: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    background-color: #292929;
  }

  @media (max-width: 450px) {
    width: 49%;
  }
`;
export const ButtonClearAll = styled.button`
  background-color: #000;
  border: 1px solid #fff;
  padding: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  margin-left: 20px;

  &:hover {
    background-color: #292929;
  }

  @media (max-width: 450px) {
    width: 49%;
    margin-left: 0px;
  }
`;

export const HeaderOuter = styled.div`
  height: 60px;
  width: calc(100% - 40px);
  display: none;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 20px;
  }
`;
