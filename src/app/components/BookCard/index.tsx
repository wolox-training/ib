import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import {BookProps} from 'src/app/interfaces/book';
import styles from './styles';
import defaultImg from './assets/img_book1.png';

function BookCard({book, onClick}: BookProps) {
  const source = book.imageUrl ? {uri: book.imageUrl} : defaultImg;

  return (
    <TouchableHighlight onPress={onClick}>
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
    </TouchableHighlight>
  );
}

export default BookCard;
