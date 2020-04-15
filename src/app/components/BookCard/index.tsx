import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

interface Props {
  book: {
    id: number;
    author: string;
    title: string;
    genre: string;
    publisher: string;
    year: string;
    image_url: string;
  };
}

const BookCard = ({book}: Props) => {
  let source = book.image_url
    ? {uri: book.image_url}
    : require('./assets/img_book1.png');

  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={source} />
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {book.title}
        </Text>
        <Text numberOfLines={1} style={styles.subtitle}>
          {book.author}
        </Text>
      </View>
    </View>
  );
};

export default BookCard;
