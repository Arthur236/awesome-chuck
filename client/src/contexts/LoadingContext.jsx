import React, { createContext } from 'react';

export const LoadingContext = createContext();

class LoadingContextProvider extends React.Component {
  state = {
    loadingCategories: false,
    loadingRandomJoke: false,
    loadingJoke: false,
    loadingSearchResult: false
  };

  toggleLoadingCategories = () => {
    this.setState({
      loadingCategories: !this.state.loadingCategories
    });
  };

  toggleLoadingRandomJoke = () => {
    this.setState({
      loadingRandomJoke: !this.state.loadingRandomJoke
    });
  };

  toggleLoadingJoke = () => {
    this.setState({
      loadingJoke: !this.state.loadingJoke
    });
  };

  toggleLoadingSearchResult = () => {
    this.setState({
      loadingSearchResult: !this.state.loadingSearchResult
    });
  };

  render() {
    return (
      <LoadingContext.Provider value={{
        ...this.state,
        toggleLoadingCategories: this.toggleLoadingCategories,
        toggleLoadingRandomJoke: this.toggleLoadingRandomJoke,
        toggleLoadingJoke: this.toggleLoadingJoke,
        toggleLoadingSearchResult: this.toggleLoadingSearchResult,
      }}>
        {this.props.children}
      </LoadingContext.Provider>
    );
  }
}

export default LoadingContextProvider;
