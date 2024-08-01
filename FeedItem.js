import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import styles from './Styles';


const FeedItem = ({ item }) => {
    return (
      <View style={styles.feedItem}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.vpC8gIQ-oacICNAa67LrMQHaFe?&rs=1&pid=ImgDetMain' }} style={styles.avatar} />
         
          <View style={styles.headerText}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        </View>
  
        <Text style={styles.text}>{item.text}</Text>
        <Image source={{ uri: 'https://th.bing.com/th/id/OIP.sCxlaaAKfeDQi2-ksnvo4QHaE7?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }} style={styles.image} />
        <View style={styles.footer}>
          
          {/*botão de like  */}
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="like1" size={24} color="black" />
            <Text style={styles.iconText}>Curtir</Text>
          </TouchableOpacity>

          {/*botão de comentar  */}
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="message1" size={24} color="black" />
            <Text style={styles.iconText}>Comentar</Text>
          </TouchableOpacity>
          
          {/*botão de compartiolhar */}
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="sharealt" size={24} color="black" />
            <Text style={styles.iconText}>Compartilhar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default FeedItem;