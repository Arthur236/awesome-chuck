import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Loader from '../Loader';
import CategoryCard from '../CategoryCard';
import { CategoryWrapper } from './CategoriesStyles';

export const FETCH_CATEGORIES = gql`
  query FetchCategories {
    categories {
      name
    }
  }
`;

const Categories = (props) => {
  const { data, loading, error } = useQuery(FETCH_CATEGORIES);

  if (loading) return <Loader/>;

  if (error) return (
    <p>Could not fetch the categories <span role='img' aria-label='crying emoji'>😥</span></p>
  );

  const renderCategories = () => (
    data.categories.map((category) => (
      <CategoryCard
        key={category.name}
        category={category}
        showModal={props.showModal}
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
