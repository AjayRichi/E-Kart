import styled from "styled-components";
import { Products } from "./modules/Products";
import "./styles.css";
import { BiCube } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

/** STYLED COMPONENTS - START **/
const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: 82px 1fr;
  grid-template-columns: 115px 1fr;
`;

const StyledHeader = styled.div`
  grid-column: 1 / -1;
  background-color: #334685;
  color: #ffffff;
  height: 82px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 99;
  padding-left: 40px;
`;

const StyledSider = styled.div`
  background-color: #334685;
  color: #ffffff;
  position: sticky;
  top: 82px;
  width: 115px;
  height: calc(100vh - 82px);
  display: flex;
  justify-content: center;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 85px;
  background-color: #233165;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const StyledContent = styled.div`
  background-color: #f8f7fc;
`;
/** STYLED COMPONENTS - END **/

export default function App() {
  return (
    <div className="App">
      <StyledLayout>
        <StyledHeader>
          <FaUserCircle size={30} />
        </StyledHeader>
        <StyledSider>
          <Tab>
            <BiCube size={21} />
            <span>Products</span>
          </Tab>
        </StyledSider>
        <StyledContent>
          <Products />
        </StyledContent>
      </StyledLayout>
    </div>
  );
}
