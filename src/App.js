import React, { Component } from 'react';
import Pagination from './Pagination';

import './scss/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pagination 
          resultsCount={ 350 }
          maxPageItemCount={ 20 }
          maxResultsPerPage={ 30 }
        />
      </div>
    );
  }
}

export default App;
