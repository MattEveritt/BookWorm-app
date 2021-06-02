import { SearchBar } from 'react-native-elements';
import React from 'react';

import Colors from '../constants/Colors';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search Titles..."
        onChangeText={this.updateSearch}
        value={search}
        //platform={'android'}
        containerStyle={{
          borderRadius: 5,
        }}
      />
    );
  }
}

