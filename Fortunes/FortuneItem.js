import React from 'react';
import {Box} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import {stringToColour} from './loadfortunes';
import {fontsize} from './fortuneretucers';
import {useSelector} from 'react-redux';

const FortuneItem = ({item, isforceddarkmode}) => {
  const TextColor = isforceddarkmode ? styles.whitecolor : styles.blackcolor;
  const setfontsize = useSelector(fontsize);
  return (
    <Box border={1}>
      <Box style={{backgroundColor: stringToColour(item.t)}}>
        <Text>{item.t}</Text>
      </Box>
      <Box px={4}>
        <Text style={{...TextColor, fontSize: setfontsize}} selectable={true}>
          {item.f}
        </Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  whitecolor: {
    color: '#41FF00',
  },
  blackcolor: {
    color: 'black',
  },
});

export default FortuneItem;
