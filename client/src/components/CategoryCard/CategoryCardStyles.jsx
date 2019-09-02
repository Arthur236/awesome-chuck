import styled from 'styled-components';
import { Card } from 'antd';

const CustomCard = styled(Card)`
  width: 250px;
  margin: 10px !important;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  &::after {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    -webkit-transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  &:hover {
    cursor: pointer;
    background-color: #001529;
    color: #fefefe;
    transform: scale(1.03, 1.03);
  }
  
  :hover::after {
    opacity: 1;
  }
`;

export {
  CustomCard
};
