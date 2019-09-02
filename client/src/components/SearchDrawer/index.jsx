import React, { useContext, useState } from 'react';
import { Avatar, Drawer, Input, List, message } from 'antd';
import gql from 'graphql-tag';
import { LoadingContext } from '../../contexts/LoadingContext';
import { useQuery } from '@apollo/react-hooks';
import Loader from '../Loader';

const { Search } = Input;

const SEARCH_JOKE = gql`
  query SearchJoke($queryString: String!) {
    searchJoke(queryString: $queryString) {
      total
      results {
        id
        icon_url
        value
      }
    }
  }
`;

const SearchDrawer = (props) => {
  const loadingContext = useContext(LoadingContext);

  const { onClose, placement, visible } = props;
  const { loadingSearchResult, toggleLoadingSearchResult } = loadingContext;

  const [searchTerm, setSearchTerm] = useState('');
  const [response, setResponse] = useState({
    total: 0,
    results: [],
    error: null
  });

  const { refetch } = useQuery(SEARCH_JOKE, {
    variables: {
      queryString: searchTerm
    },
    skip: true
  });

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async value => {
    if (value.length < 3) {
        message.error('The search term should be at least 3 characters long');

      return;
    }

    toggleLoadingSearchResult();

    const result = await refetch({ queryString: searchTerm });

    setResponse({
      ...response,
      total: result.data.searchJoke.total,
      results: result.data.searchJoke.results,
      error: result.errors
    });

    toggleLoadingSearchResult();
  };

  const renderSearchResults = () => {
    if (loadingSearchResult) {
      return <div style={{ marginTop: 20 }}><Loader/></div>;
    }

    return (
      <div style={{ marginTop: 20 }}>
        <p>Search Results</p>

        <List
          itemLayout="horizontal"
          dataSource={response.results}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.icon_url}/>}
                description={item.value}
              />
            </List.Item>
          )}
        />
      </div>
    );
  };

  return (
    <Drawer
      title="Search"
      placement={placement}
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <Search
        placeholder="Enter search term"
        onChange={handleChange}
        onSearch={value => handleSearch(value)}
      />

      {renderSearchResults()}
    </Drawer>
  );
};

export default SearchDrawer;
