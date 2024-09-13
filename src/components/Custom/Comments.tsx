import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import CustomText from '../../components/Custom/CustomText';
import { colors } from '../../globals/Colors';

const Comments = ({ comment = [] }) => {
  return (
    <ScrollView>
      {Array.isArray(comment) && comment.length > 0 ? (
        comment.map((item, index) => (
          <CommentItem
            key={index}
            image={item.image}
            name={item.name}
            time={item.time}
            comment={item.comment}
            replies={item.replies || []}
          />
        ))
      ) : (
        <View style={styles.noComments}>
          <Text>No comments available</Text>
        </View>
      )}
    </ScrollView>
  );
};

const CommentItem = ({ image, name, time, comment, replies }) => {
  return (
    <View style={styles.commentContainer}>
      <Image source={image} style={styles.commentImage} />
      <View style={styles.commentContent}>
        <View style={styles.commentHeader}>
          <CustomText style={styles.commentName}>{name}</CustomText>
          <CustomText style={styles.commentTime}>{time}</CustomText>
        </View>
        <CustomText style={styles.commentText}>{comment}</CustomText>

        {replies.length > 0 && (
          <View style={styles.repliesSection}>
            <View style={styles.repliesImages}>
              {replies.slice(0, 2).map((reply, index) => (
                <Image key={index} source={reply.image} style={styles.replyImage} />
              ))}
            </View>
            <TouchableOpacity>
              <Text style={styles.viewRepliesText}>
                {replies.length} {replies.length > 1 ? 'Replies' : 'Reply'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  commentImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commentName: {
    fontWeight: 'bold',
    color: 'black',
  },
  commentTime: {
    color: '#999',
    fontSize: 12,
    
    left: -100,
  },
  commentText: {
    color: 'black',
    marginTop: 5,
  },
  repliesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  repliesImages: {
    flexDirection: 'row',
  },
  replyImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: -5,
  },
  viewRepliesText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight:"bold",
    left: -180,
  },
  noComments: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Comments;
