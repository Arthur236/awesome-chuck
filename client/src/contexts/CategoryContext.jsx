import React, { createContext } from 'react';

export const CategoryContext = createContext();

class CategoryContextProvider extends React.Component {
  state = {
    category: 'animal'
  };

  setCategory = (category) => {
    this.setState({
      category
    });
  };

  render() {
    return (
      <CategoryContext.Provider value={{ ...this.state, setCategory: this.setCategory }}>
        {this.props.children}
      </CategoryContext.Provider>
    );
  }
}

export default CategoryContextProvider;
