import styled from "styled-components";
import { Products } from "./modules/Products";
import "./styles.css";
import { BiCube } from "react-icons/bi";

/** STYLED COMPONENTS - START **/
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f7fc;
`;

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #334685;
  color: #ffffff;
  text-align: center;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LayoutBody = styled.div`
  display: flex;
  flex-grow: 1;
`;

const StyledSider = styled.div`
  background-color: #334685;
  color: #ffffff;
  position: fixed;
  width: 115px;
  height: 100%;
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
  font-family: Proxima Nova;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const StyledContent = styled.div`
  flex-grow: 1;
  background-color: #f8f7fc;
  padding: 24px;
  overflow: scroll;
`;
/** STYLED COMPONENTS - END **/

export default function App() {
  return (
    <div className="App">
      <StyledLayout>
        <StyledHeader>Header</StyledHeader>
        <LayoutBody>
          <StyledSider>
            <Tab>
              <BiCube size={21} />
              <span>Products</span>
            </Tab>
          </StyledSider>
          <StyledContent>
            <Products />
          </StyledContent>
        </LayoutBody>
      </StyledLayout>
    </div>
  );
}
