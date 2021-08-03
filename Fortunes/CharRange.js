import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {HStack, VStack, Heading, Button, Text, Input} from 'native-base';
import {useDispatch} from 'react-redux';
import {setminlength, setmaxlength, setargs} from './fortuneretucers';
import getrandom from './loadfortunes';
const CharRange = ({isforceddarkmode}) => {
  const backgroundStyle = isforceddarkmode ? styles.blackbg : styles.whitebg;
  const textcolor = isforceddarkmode ? styles.whitecolor : styles.blackcolor;
  const [min, setMin] = useState(false);
  const [max, setMax] = useState(false);
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(setmaxlength(max));
    dispatch(setminlength(min));
    getrandom();
    dispatch(setargs(`-l ${min} -s ${max}`));
    dispatch(setmaxlength(false));
    dispatch(setminlength(false));
  };

  const handleChange = (s, type) => {
    if (type === 'min') {
      if (!!s.nativeEvent.text === true) {
        setMin(s.nativeEvent.text);
      } else {
        setMin(false);
      }
    } else if (type === 'max') {
      if (!!s.nativeEvent.text === true) {
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
        <VStack style={{...backgroundStyle, flex: 1, marginRight: 3}}>
          <Heading size="xs" style={backgroundStyle}>
            Minimum
          </Heading>
          <Input
            keyboardType="numeric"
            onChange={s => handleChange(s, 'min')}
          />
        </VStack>
        <VStack style={{...backgroundStyle, flex: 1, marginRight: 3}}>
          <Heading size="xs" style={backgroundStyle}>
            Maximum
          </Heading>
          <Input
            style={{color: '#FFFFFF'}}
            keyboardType="numeric"
            onChange={s => handleChange(s, 'max')}
          />
        </VStack>
        <VStack>
          <Text />
          <Button onPress={() => submit()}>
            <Text style={styles.blackcolor}>GO</Text>
          </Button>
        </VStack>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  whitecolor: {
    color: 'white',
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
    color: 'black',
  },
});
export default CharRange;
