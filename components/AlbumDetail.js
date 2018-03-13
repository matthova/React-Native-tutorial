import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
};

const AlbumDetail = ({
  title, artist, url, image, thumbnail_image,
}) => (
  <Card>
    <CardSection>
      <View>
        <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
      </View>
      <View style={styles.headerContentStyle}>
        <Text>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </CardSection>
  </Card>
);

export default AlbumDetail;
