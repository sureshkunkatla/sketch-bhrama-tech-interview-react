import React from "react";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  SketchBrahmaText,
  ButtonAddNew,
  ButtonClearAll,
  HeaderOuter,
} from "./HeaderStyles";

const Header = ({ onClickAdd, onClickDelete }) => {
  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <SketchBrahmaText>{"Sketch Brahma"}</SketchBrahmaText>
        </HeaderLeft>
        <HeaderRight>
          <ButtonAddNew onClick={onClickAdd}>{"Add New"}</ButtonAddNew>
          <ButtonClearAll onClick={onClickDelete}>{"Clear All"}</ButtonClearAll>
        </HeaderRight>
      </HeaderContainer>
      <HeaderOuter>
        <ButtonAddNew onClick={onClickAdd}>{"Add New"}</ButtonAddNew>
        <ButtonClearAll onClick={onClickDelete}>{"Clear All"}</ButtonClearAll>
      </HeaderOuter>
    </>
  );
};

export default Header;
