import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Avatar, Button, Modal } from 'antd';
import gql from 'graphql-tag';
import changeCase from 'change-case';

import Loader from '../Loader';
import { JokeWrapper } from './JokeModalStyles';

import { CategoryContext } from '../../contexts/CategoryContext';
import { LoadingContext } from '../../contexts/LoadingContext';

const FETCH_CATEGORY_JOKE = gql`
  query FetchCategoryJoke($category: String!) {
    joke(category: $category) {
      icon_url
      value
    }
  }
`;

const JokeModal = (props) => {
  const categoryContext = useContext(CategoryContext);
  const loadingContext = useContext(LoadingContext);

  const { modalVisible, handleCancel } = props;
  const { loadingJoke, toggleLoadingJoke } = loadingContext;
  const { category } = categoryContext;

  const { data, loading, error, refetch } = useQuery(FETCH_CATEGORY_JOKE, {
    variables: {
      category
    }
  });

  const refetchData = async () => {
    toggleLoadingJoke();

    await refetch();

    toggleLoadingJoke();
  };

  return (
    <Modal
      title={`${changeCase.titleCase(category)} Joke`}
      visible={modalVisible}
      onOk={() => refetchData()}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>Close</Button>,
        <Button key="submit" type="primary" loading={loadingJoke} onClick={() => refetchData()}>
          {`New ${changeCase.titleCase(category)} Joke`}
        </Button>,
      ]}
    >
      {loadingJoke || loading || !data
        ? <Loader/>
        : (
          <JokeWrapper>
            <div style={{ marginRight: 5 }}><Avatar src={data.joke && data.joke.icon_url}/></div>
            <div>{data.joke && data.joke.value}</div>
          </JokeWrapper>
        )
      }

      {error && <p>Could not fetch the awesome joke <span role='img' aria-label='crying emoji'>😥</span></p>}
    </Modal>
  );
};

export default JokeModal;
