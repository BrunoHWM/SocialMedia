import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import FeedItem from './FeedItem';
import styles from './Styles';

const data = [
  {
    id: '1',
    name: 'joel',
    timestamp: '1h',
    text: 'auau apenas',
  },
  {
    id: '2',
    name: 'carlos',
    timestamp: '2h',
    text: 'cachorro legal meu mano',
  },
  {
    id: '3',
    name: 'vinicios',
    timestamp: '3h',
    text: 'tenho 2',
  },
];

const App = () => {
  const renderItem = ({ item }) => <FeedItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default App;