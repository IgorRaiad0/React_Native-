import React, { useState } from 'react';
import {FlatList,StyleSheet,Text,View,Image,
} from 'react-native';

const Post = React.memo(({ postData }) => {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.title}>{postData.title}</Text>
      <Image source={{ uri: postData.imageUrl }} style={styles.image} />
      <Text style={styles.summary}>{postData.summary}</Text>
    </View>
  );
});


const TimelineComponent = () => {
  const [posts, setPosts] = useState(() => generatePosts(500));

  const renderItem = ({ item }) => (
    <Post
      postData={item}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Timeline</Text>
      </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={11}
      />
    </View>
  );
};

const generatePosts = (count) => {
  const posts = [];
  for (let i = 1; i <= count; i++) {
    posts.push({
      id: i,
      title: `Post de Nº ${i}`,
      imageUrl: `https://imgs.search.brave.com/ePsOEuWidLd49ULR8NVAVGEhgzlr3eWG_81-n2wJ9ks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9EWmxaalkz/TXpRdE5URTVaUzAw/WXpsa0xUZzNNbVF0/Wm1FNVl6WTBOREl4/WldNMVhrRXlYa0Zx/Y0djQC5qcGc`,
      summary: `Este é o resumo do post ${i}. bla bla bla bla bla bla bla bla `,
    });
  }
  return posts;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5'
  },
  header: {
    padding: 15,
    backgroundColor: '#3464e8ff',
    borderBottomWidth: 1,
    borderBottomColor: '#182ef6ff'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  postContainer: {
    backgroundColor: '#d0e8faff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10
  },
  summary: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 15
  },
});

export default TimelineComponent;

