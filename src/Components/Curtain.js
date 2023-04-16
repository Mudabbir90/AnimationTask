import React, {useEffect, useState} from 'react';
import {View, Animated, Image, StyleSheet} from 'react-native';
import curtain from '../assets/img/curtain.png';
import curtainFlip from '../assets/img/curtainFlip.png';
const Curtain = () => {
  const [curtainAnimation] = useState(new Animated.Value(0));
  const [curtainAnimation2] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(curtainAnimation, {
      toValue: 3.5,
      duration: 2100,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    Animated.timing(curtainAnimation2, {
      toValue: -3,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  const curtainTranslateX = curtainAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 150],
  });

  const curtainTranslateX2 = curtainAnimation2.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 150],
  });

  return (
    <View style={styles.MainContainer}>
      <View style={styles.Container}>
        <Animated.View
          style={{
            flex: 1,
            alignSelf: 'center',
            transform: [{translateX: curtainTranslateX}],
          }}>
          <Image source={curtain} style={{width: 300, height: 850}} />
        </Animated.View>

        <Animated.View
          style={{
            flex: 1,
            alignItems: 'center',
            transform: [{translateX: curtainTranslateX2}],
          }}>
          <Image source={curtainFlip} style={{width: 300, height: 850}} />
        </Animated.View>
      </View>
    </View>
  );
};

export default Curtain;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  Container: {
    width: '100%',
    // position:'absolute',
  },
});
