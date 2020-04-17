import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import {BookCardProps} from 'src/app/interfaces/bookCard';
import styles from './styles';
import defaultImg from './assets/img_book1.png';

function BookCard({book, navigation}: BookCardProps) {
  const handleClick = () => navigation.navigate('Book Details', {book: book});
  const source = book.image_url ? {uri: book.image_url} : defaultImg;

  return (
    <TouchableHighlight onPress={handleClick}>
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
