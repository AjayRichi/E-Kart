import React, { useCallback } from "react";
import styled from "styled-components";
import { StyledFilterHeader } from "./Filters";
import { FaSearch } from "react-icons/fa";

/** STYLED COMPONENTS - START **/
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 12px;
  border: 1px solid #b9b9b9;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 400;
`;
const Icon = styled(FaSearch)`
  position: absolute;
  left: 290px;
`;
/** STYLED COMPONENTS - END **/

const Search = ({ searchValue = "", handleSearch }) => {
  return (
    <div>
      <StyledFilterHeader>Search</StyledFilterHeader>
      <InputWrapper>
        <StyledInput
          placeholder="Search by product name"
          value={searchValue}
          onChange={handleSearch}
        />
        <Icon />
      </InputWrapper>
    </div>
  );
};

export { Search };
