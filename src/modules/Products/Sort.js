import React from "react";
import styled from "styled-components";
import { StyledFilterHeader } from "./Filters";

/** STYLED COMPONENTS - START **/
const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const RadioButton = styled.div`
  cursor: pointer;
  width: 98px;
  padding: 12px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  border: 1px solid #b9b9b9;
  border-radius: 100px;
  * {
    cursor: pointer;
  }
  > input {
    display: none;
  }
`;
/** STYLED COMPONENTS - END **/

const Sort = ({ sortOptions = [], handleSelect, selectedSort = "" }) => {
  return (
    <React.Fragment>
      <StyledFilterHeader>Sort</StyledFilterHeader>
      <RadioGroup>
        {sortOptions.map((option) => (
          <RadioButton
            key={option.value}
            onClick={() => handleSelect(option.value)}
            style={{
              backgroundColor:
                selectedSort === option.value ? "#F2FAD1" : "inherit",
            }}
          >
            <input type="radio" name={option.value} value={option.value} />
            <label htmlFor={option.value}>{option.label}</label>
          </RadioButton>
        ))}
      </RadioGroup>
    </React.Fragment>
  );
};

export { Sort };
