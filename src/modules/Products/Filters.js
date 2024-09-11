import React from "react";
import { formatterText } from "../../commons/utils/currenyFormatter";
import styled from "styled-components";

/** STYLED COMPONENTS - START **/
const StyledSelect = styled.select`
  width: 203px;
  padding: 12px;
  border: 1px solid #b9b9b9;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 400;
`;

export const StyledFilterHeader = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 5px;
`;
/** STYLED COMPONENTS - END **/

const Filters = ({ productCategories, handleSelect }) => {
  return (
    <div>
      <StyledFilterHeader>Filter</StyledFilterHeader>
      <StyledSelect onChange={handleSelect}>
        <option value={"all"}>All</option>
        {productCategories.map((category) => (
          <option key={category} value={category}>
            {formatterText({ type: "capitalizeFirstLetter", text: category })}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

export { Filters };
