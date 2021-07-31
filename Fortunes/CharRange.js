import React, {useState} from 'react';
import {View, StyleSheet, useColorScheme} from 'react-native';
import {HStack, VStack, Heading, Input, Button, Text} from 'native-base';
import {useDispatch} from 'react-redux';
import {setminlength, setmaxlength} from './fortuneretucers';
import getrandom from './loadfortunes';
const CharRange = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? styles.blackbg : styles.whitebg;
  const [min, setMin] = useState(false);
  const [max, setMax] = useState(false);
  const dispatch = useDispatch();

  const submit = () => {
    console.log('AAA', min, max);
    dispatch(setmaxlength(max));
    dispatch(setminlength(min));
    getrandom();
  };

  const handleChange = (s, type) => {
    if (type === 'min') {
      if (!!s.nativeEvent.text) {
        setMin(s.nativeEvent.text);
      } else {
        setMin(false);
      }
    } else if (type === 'max') {
      if (!!s.nativeEvent.text) {
        setMax(s.nativeEvent.text);
      } else {
        setMax(false);
      }
    }
  };

  return (
    <View>
      <Heading size="sm" style={backgroundStyle}>
        Character Range:
      </Heading>
      <HStack>
        <VStack style={{flex: 1}}>
          <Heading size="xs" style={backgroundStyle}>
            Minimum
          </Heading>
          <Input
            keyboardType="numeric"
            onChange={s => handleChange(s, 'min')}
          />
        </VStack>
        <VStack style={{flex: 1}}>
          <Heading size="xs" style={backgroundStyle}>
            Maximum
          </Heading>
          <Input
            keyboardType="numeric"
            onChange={s => handleChange(s, 'max')}
          />
        </VStack>
        <VStack>
          <Text />
          <Button onPress={() => submit()}>GO</Button>
        </VStack>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  whitecolor: {
    color: '#41FF00',
  },
  blackcolor: {
    color: 'black',
  },
  blackbg: {
    backgroundColor: '#332940',
    color: 'white',
  },
  whitebg: {
    backgroundColor: 'white',
  },
});

export default CharRange;
