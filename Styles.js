import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    feedItem: {
      backgroundColor: '#fff',
      marginBottom: 10,
      borderRadius: 8,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    headerText: {
      flex: 1,
    },
    name: {
      fontWeight: 'bold',
    },
    timestamp: {
      color: '#888',
    },
    text: {
      marginVertical: 10,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 8,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
    },
    iconButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconText: {
      marginLeft: 5,
    },
  });
  
  export default styles;
  