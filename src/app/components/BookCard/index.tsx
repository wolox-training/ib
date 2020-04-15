import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {Book} from 'src/app/interfaces/book';
import default_img from './assets/img_book1.png';

function BookCard({book}: Book) {
  const source = book.image_url ? {uri: book.image_url} : default_img;

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
}

export default BookCard;
