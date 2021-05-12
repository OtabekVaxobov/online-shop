import React, { Component } from "react";
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';

import BookCard from "../containers/BookCard";
import Filter from "../containers/Filer";
import Menu from "../containers/Menu";
import { render } from "react-dom";

classs App extends Component {
  componentWillMount(){
    const {setBooks} = this.props;
    axios.get('/books.json').then(({data}) => {
      setBooks(data);
    });
  }

  render(){
    const { books, isReady } = this.props;
    return (
      <Cintainer>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
             ? 'Loading...'
             : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Cintainer>
    );
  }
}

export default App;
