import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Avatar, Button, Modal } from 'antd';
import gql from 'graphql-tag';

import Loader from '../Loader';
import { JokeWrapper } from './RandomJokeModalStyles';

import { LoadingContext } from '../../contexts/LoadingContext';

export const FETCH_RANDOM_JOKE = gql`
  query FetchRandomJoke {
    randomJoke {
      icon_url
      value
    }
  }
`;

const RandomJokeModal = (props) => {
  const loadingContext = useContext(LoadingContext);

  const { modalVisible, handleCancel } = props;
  const { loadingRandomJoke, toggleLoadingRandomJoke } = loadingContext;

  const { data, loading, error, refetch } = useQuery(FETCH_RANDOM_JOKE);

  const refetchData = async () => {
    toggleLoadingRandomJoke();

    await refetch();

    toggleLoadingRandomJoke();
  };

  return (
    <Modal
      title="Random Joke"
      visible={modalVisible}
      onOk={() => refetchData()}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>Close</Button>,
        <Button key="submit" type="primary" loading={loadingRandomJoke} onClick={() => refetchData()}>
          New Joke
        </Button>,
      ]}
    >
      {loadingRandomJoke || loading || !data
        ? <Loader/>
        : (
          <JokeWrapper>
            <div style={{ marginRight: 5 }}><Avatar src={data.randomJoke && data.randomJoke.icon_url}/></div>
            <div>{data.randomJoke && data.randomJoke.value}</div>
          </JokeWrapper>
        )
      }

      {error && <p>Could not fetch the awesome joke <span role='img' aria-label='crying emoji'>😥</span></p>}
    </Modal>
  );
};

export default RandomJokeModal;
