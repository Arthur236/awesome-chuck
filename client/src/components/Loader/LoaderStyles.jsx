import styled from 'styled-components';
import { Icon, Spin } from 'antd';

const CustomSpinner = styled(Spin)`
  display: flex !important;
  justify-content: center !important;
`;

const CustomIcon = styled(Icon)`
  font-size: 40px !important;
  color: #c80030 !important;
`;

export {
  CustomSpinner,
  CustomIcon
};
