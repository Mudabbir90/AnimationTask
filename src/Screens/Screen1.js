import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import award from '../assets/img/award_bg.png';
import awardPlatform from '../assets/img/awardPlatform.png';
import castingLogo from '../assets/img/castingLogo.png';
import girlClap from '../assets/img/girlClap.png';
import { useNavigation } from '@react-navigation/native';
import Curtain from '../Components/Curtain';

const Screens1 = () => {
  const [hours, setHours] = useState(4);
  const [minutes, setMinutes] = useState(52);
  const [seconds, setSeconds] = useState(56);
  const navigation = useNavigation();

  useEffect(() => {
    const timerId = setInterval(() => {
      if (hours === 4 && minutes === 52 && seconds === 53) {
        clearInterval(timerId);
        setTimeout(() => {
          navigation.navigate('Screens2');
        }, 0);
      } else if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(timerId);
          } else {
            setHours(prevHours => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [hours, minutes, seconds, navigation]);
  return (
    <View style={styles.MainContainer}>
      <Curtain/>
      <View style={styles.Container}>
        <Image source={award} style={styles.award} />
        <Image source={awardPlatform} style={styles.awardPlatform} />
        <View style={styles.GirlImg}>
          <Image source={girlClap} style={styles.girlClap} />
        </View>
        <View style={styles.GirlImg}>
          <Image source={castingLogo} style={styles.castingLogo} />
          <View style={styles.secondsView}>
            <Text style={styles.secondsViewText}>{hours}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</Text>
          </View>
        </View>
        <View style={styles.TextView}>
          <Text style={styles.Text}>The Results R In!</Text>
        </View>
      </View>
    </View>
  );
};

export default Screens1;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  Container:{
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
    width: '50%',
    height: '50%',
  },
  GirlImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '31%',
  },
  castingLogo: {
    width: '30%',
    height: '18%',
    top: '-8%',
    position: 'absolute',
    resizeMode: 'stretch',
  },
  TextView: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '65%',
  },
  Text: {
    fontSize: 30,
    color: '#f8f79e',
  },
  secondsView:{
    position:'absolute',
    top:'1.5%',
    transform: [{ rotate: '-15deg' }],
  },
  secondsViewText:{
    fontSize:25,
    color:'white',
  }
});
