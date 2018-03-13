import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  albumImageStyle: {
    height: 400,
    flex: 1,
    width: null,
  },
};

const AlbumDetail = ({
  title, artist, url, image, thumbnail_image,
}) => (
  <Card>
    <CardSection>
      <View style={styles.thumbnailContainerStyle}>
        <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
      </View>
      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image style={styles.albumImageStyle} source={{ uri: image }} />
    </CardSection>
    <CardSection>
      <Button onPress={() => Linking.openURL(url)}>Buy Me!!!</Button>
    </CardSection>
  </Card>
);

export default AlbumDetail;
