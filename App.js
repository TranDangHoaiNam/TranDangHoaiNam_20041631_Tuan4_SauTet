import React, {useRef} from 'react';
import {
  Image,
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const App = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
 
      
     
      <Animated.Image
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            
            
          },
        ]}  source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}>
     
      </Animated.Image>
      <View style={styles.buttonRow}>
        <Button title="Hình" onPress={fadeIn} />
        <Button title="Xuất" onPress={fadeOut} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ImageBackground
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  tinyLogo: {
    width: 500,
    height: 500,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,

  },
});

export default App;