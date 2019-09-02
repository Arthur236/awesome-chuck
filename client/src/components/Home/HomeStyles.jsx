import styled from 'styled-components';
import { Layout } from 'antd';

const StyledLayout = styled(Layout)`
  min-height: 100vh !important;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  justify-content: space-between;
  margin: 0 auto;
  
  button {
    min-width: 160px;
    margin-bottom: 5px;
  }
`;

const CustomOr = styled.p`
  display: flex;
  flex-direction: row;
  
  &:before, &:after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    margin: auto;
  }
`;

export {
  StyledLayout,
  ButtonWrapper,
  CustomOr
}
