import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh !important;
`;

const StyledMenu = styled(Menu)`
  line-height: 64px !important;
`;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
`;

const BannerDescription = styled.span`
  color: rgba(255, 255, 255, 0.65);
  margin-left: 20px;
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
  StyledMenu,
  StyledHeader,
  BannerDescription,
  ButtonWrapper,
  CustomOr
}
