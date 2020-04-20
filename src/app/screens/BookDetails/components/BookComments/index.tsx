import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import styles from './styles';
import { BookCommentsProps } from 'src/app/interfaces/comment';
import Spacer from 'src/app/components/Spacer';
import Comment from './components/Comment';

function BookComments({bookComments}: BookCommentsProps) {
  const renderSeparator = () => <Spacer height={30}/>;
  const renderItem = ({item}: any) =><Comment userComment={item} />;
  const setId = (item: { id: string; }) => item.id;

  const lastFiveComments = bookComments.slice(-5);
  
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={lastFiveComments}
        renderItem={renderItem}
        keyExtractor={setId}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default BookComments;
