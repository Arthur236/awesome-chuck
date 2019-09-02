import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Loader from '../Loader';
import CategoryCard from '../CategoryCard';
import { CategoryWrapper } from './CategoriesStyles';

const FETCH_CATEGORIES = gql`
  query FetchCategories {
    categories {
      name
    }
  }
`;

const Categories = (props) => {
  const { data, loading, error } = useQuery(FETCH_CATEGORIES);

  if (loading) return <Loader/>;

  if (error) return <p>Could not fetch the categories</p>;

  const renderCategories = () => (
    data.categories.map((category) => (
      <CategoryCard
        key={category.name}
        category={category}
      />
    ))
  );

  return (
    <CategoryWrapper>
      {renderCategories()}
    </CategoryWrapper>
  );
};

export default Categories;
