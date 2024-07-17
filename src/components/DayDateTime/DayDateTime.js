import React from "react";
import {
  RowContainer,
  DropdownContainer,
  DropdownOption,
  Date,
  Time,
  DeleteItem,
  ScrollView,
  ButtonContainerResponsive,
  InputContainerResponsive,
} from "./DayDateTimeStyles";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DayDateTime = ({ rows, setRows }) => {
  const updateState = (identifier, item, value) => {
    const newObj = {
      ...item,
      [identifier]: value,
    };

    const filterRemaining = rows.filter((each) => each.id !== item.id);

    setRows([...filterRemaining, newObj]);
  };

  const onClickDeleteItem = (item) => {
    const filterRemaining = rows.filter((each) => each.id !== item.id);
    setRows(filterRemaining);
  };

  return (
    <ScrollView>
      {rows
        .sort((a, b) => a.id - b.id)
        .map((eachItem) => (
          <RowContainer key={eachItem.id}>
            <InputContainerResponsive>
              <DropdownContainer
                onChange={(e) => updateState("day", eachItem, e.target.value)}
                value={eachItem.day}
              >
                {days.map((each) => {
                  return (
                    <DropdownOption key={each} value={each}>
                      {each}
                    </DropdownOption>
                  );
                })}
              </DropdownContainer>
              <Date
                type={"date"}
                onChange={(e) => updateState("date", eachItem, e.target.value)}
              />
              <Time
                type={"time"}
                onChange={(e) => updateState("time", eachItem, e.target.value)}
              />
            </InputContainerResponsive>
            <ButtonContainerResponsive>
              <DeleteItem onClick={() => onClickDeleteItem(eachItem)}>
                {"Delete"}
              </DeleteItem>
            </ButtonContainerResponsive>
          </RowContainer>
        ))}
    </ScrollView>
  );
};

export default DayDateTime;
