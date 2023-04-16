import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import award from '../assets/img/award_bg.png';
import awardPlatform from '../assets/img/awardPlatform.png';
import girlClap from '../assets/img/girlClap.png';
import heart from '../assets/img/main-heart.png';
import {useNavigation} from '@react-navigation/native';
import arrow from '../assets/img/arrow.png';
import congrats from '../assets/img/congrats.png';

const Screen3 = () => {
  const navigation = useNavigation();
  const [heartCount, setHeartCount] = useState(15000);

  const ButtonPress = () => {
    navigation.navigate('Screen1');
  };

  useEffect(() => {
    const increment = 1000;
    const interval = setInterval(() => {
      setHeartCount(prevCount => {
        const newCount = prevCount + increment;

        if (newCount >= 40000) {
          clearInterval(interval);
          return 40000;
        } else {
          return newCount;
        }
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.MainContainer}>
      <View style={styles.Container}>
        <Image source={award} style={styles.award} />
        <Image source={awardPlatform} style={styles.awardPlatform} />
        <View style={styles.GirlImg}>
          <Image source={girlClap} style={styles.girlClap} />
        </View>
        
          <View style={styles.CongratulationsView}>
            <Image source={congrats} style={styles.congrats} />
          </View>
        
        <View style={styles.TextView}>
          <Text style={styles.Text}>4 Frineds Gave U Some Love</Text>
        </View>
        <View style={styles.GirlImg}>
          <Image source={heart} style={styles.heart} />
          <View style={styles.HeartTxtView}>
            <Text style={styles.HeartTxt}>{heartCount}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.ArrowView} onPress={ButtonPress}>
          <Image style={styles.ArrowImg} source={arrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  Container: {
    zIndex: -1,
  },
  award: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  awardPlatform: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '13%',
  },
  girlClap: {
    width: '40%',
    height: '40%',
  },
  GirlImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40%',
  },
  heart: {
    width: '50%',
    height: '20%',
    resizeMode: 'stretch',
    marginBottom: '120%',
  },
  TextView: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '20%',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 40,
    color: '#f8f79e',
  },
  HeartTxtView: {
    position: 'absolute',
  },
  HeartTxt: {
    fontSize: 40,
    color: '#f8f79e',
    marginBottom: '120%',
  },
  ArrowView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
    marginLeft: '40%',
  },
  ArrowImg: {
    width: '15%',
    height: '5%',
  },
  CongratulationsView: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    marginLeft:'40%',
    marginTop:'40%'
  },
  congrats: {
    resizeMode: 'contain',
    width: 100,
  },
});
