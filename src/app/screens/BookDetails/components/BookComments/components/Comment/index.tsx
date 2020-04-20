import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {CommentProps} from 'src/app/interfaces/comment';

function Comment({userComment}: CommentProps) {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require(userComment.userImgUrl)}
        style={styles.circleAvatar}
      />
      <View>
        <Text style={styles.textName}>{userComment.user}</Text>
        <Text style={styles.textComment} numberOfLines={4}>{userComment.comment}</Text>
      </View>
    </View>
  );
}

export default Comment;
