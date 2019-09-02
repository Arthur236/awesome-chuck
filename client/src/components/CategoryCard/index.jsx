import React, { useContext } from 'react';
import changeCase from 'change-case';

import {
  CustomCard
} from './CategoryCardStyles';

import { CategoryContext } from '../../contexts/CategoryContext';

const CategoryCard = (props) => {
  const categoryContext = useContext(CategoryContext);

  const { category } = props;

  const { setCategory } = categoryContext;

  const handleClick = () => {
    setCategory(category.name);
  };

  return (
    <CustomCard onClick={handleClick}>
      <p>{changeCase.titleCase(category.name)}</p>
    </CustomCard>
  );
};

export default CategoryCard;
