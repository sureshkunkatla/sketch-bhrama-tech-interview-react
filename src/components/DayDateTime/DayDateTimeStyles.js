import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #ccc;
  min-width: 220px;

  @media (max-width: 400px) {
    flex-direction: column;
    padding: 10px 20px;
  }
`;
export const DropdownContainer = styled.select`
  min-width: 200px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  margin: 10px 10px;
  background-color: #fff;

  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const DropdownOption = styled.option`
  min-width: 200px;
  height: 30px;
  font-size: 14px;
  font-weight: 400;
  background-color: #fff;
`;
export const Date = styled.input`
  min-width: 200px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  margin: 10px 10px;
  background-color: #fff;

  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const Time = styled.input`
  min-width: 200px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  margin: 10px 10px;
  background-color: #fff;

  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const DeleteItem = styled.button`
  background-color: #000;
  border: 1px solid #fff;
  padding: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  margin: 10px 10px;

  &:hover {
    background-color: #292929;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const ScrollView = styled.div`
  height: calc(100% - 60px);
  overflow-y: scroll;

  @media (max-width: 450px) {
    height: calc(100% - 120px);
  }
`;

export const InputContainerResponsive = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const ButtonContainerResponsive = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
