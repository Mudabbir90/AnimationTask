import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import award from '../assets/img/award_bg.png';
import awardPlatform from '../assets/img/awardPlatform.png';
import girlClap from '../assets/img/girlClap.png';
import heart from '../assets/img/main-heart.png';
import {useNavigation} from '@react-navigation/native';
import arrow from '../assets/img/arrow.png';
import avtar2 from '../assets/img/avtar2.png';
import Curtain from '../Components/Curtain';

const data = [
  {
    id: '1',
    Name: 'D-Lister',
    Name2: 'Sally',
    Imagee: avtar2,
  },
  {
    id: '2',
    Name: 'D-Lister2',
    Name2: 'Sally',
    Imagee: avtar2,
  },
  {
    id: '3',
    Name: 'D-Lister3',
    Name2: 'Sally',
    Imagee: avtar2,
  },
  {
    id: '4',
    Name: 'D-Lister4',
    Name2: 'Sally',
    Imagee: avtar2,
  },
];

const Screens2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const handleButtonPress = () => {
    Animated.timing(position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
      position.setValue(0);
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Screen3');
    }, 20000);

    return () => {
      clearTimeout(timeout); 
    };
  }, [currentIndex]);

  return (
    <View style={styles.MainContainer}>
      <Curtain />
      <View style={styles.Container}>
        <Image source={award} style={styles.award} />
        <Image source={awardPlatform} style={styles.awardPlatform} />

        <View style={styles.GirlImg}>
          <Image source={girlClap} style={styles.girlClap} />
        </View>

        {data.map((item, index) => {
          if (index === currentIndex) {
            return (
              <Animated.View
                key={item.id}
                style={[
                  styles.avtarImgView,
                  {
                    transform: [
                      {
                        translateX: position.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -350],
                        }),
                      },
                    ],
                  },
                ]}>
                <Image source={item.Imagee} style={styles.circleImg} />
                <View style={styles.NameText}>
                  <Text style={styles.NameText}>{item.Name}</Text>
                  <Text style={styles.NameText2}>{item.Name2}</Text>
                </View>
              </Animated.View>
            );
          } else {
            return null;
          }
        })}

        <View style={styles.TextView}>
          <Text style={styles.Text}>Gave U Some Love</Text>
        </View>
        <View style={styles.GirlImg}>
          <Image source={heart} style={styles.heart} />
          <View style={styles.HeartTxtView}>
            <Text style={styles.HeartTxt}>15000</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.ArrowView} onPress={handleButtonPress}>
          <Image style={styles.ArrowImg} source={arrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screens2;

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
    marginTop: '40%',
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
  avtarImgView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    marginTop: '5%',
    marginLeft: '10%',
    flexDirection: 'row',
  },
  circleImg: {
    width: '28%',
    height: '15%',
    borderRadius: 150,
    borderWidth: 2,
    borderColor: '#f8f79e',
  },
  NameText: {
    alignItems: 'center',
    marginTop: '4%',
    marginLeft: '5%',
    fontSize: 40,
    color: '#f8f79e',
  },
  NameText2: {
    color: 'white',
    fontSize: 20,
  },
});
