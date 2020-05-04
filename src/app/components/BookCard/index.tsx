import React from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';

import {BookCardProps} from 'src/app/interfaces/bookCard';
import styles from './styles';
import defaultImg from './assets/img_book1.png';
import Routes from 'src/constants/routes';

function BookCard({book, navigation}: BookCardProps) {
  const handleClick = () => navigation.navigate(Routes.Details, {bookId: book.id});
  const source = book.image ? {uri: book.image} : defaultImg;

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
