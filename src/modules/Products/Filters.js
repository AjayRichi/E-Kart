import React from "react";
import { formatterText } from "../../commons/utils/currenyFormatter";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 203px;
  padding: 12px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
`;

const StyledText = styled.div`
  font-family: Proxima Nova;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Filters = ({ productCategories, handleSelect }) => {
  return (
    <div>
      <StyledText>Filter</StyledText>
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
