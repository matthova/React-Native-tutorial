import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(albums => this.setState({ albums }));
  }

  render() {
    return (
      <ScrollView>
        {this.state.albums.map(album => <AlbumDetail key={album.title} {...album} />)}
      </ScrollView>
    );
  }
}
