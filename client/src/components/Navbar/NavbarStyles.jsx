import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

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

export {
  StyledMenu,
  StyledHeader,
  BannerDescription
}
