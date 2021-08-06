import React, {useState} from 'react';
import {Box, Button, HStack} from 'native-base';
import {Text, StyleSheet, View} from 'react-native';
import {stringToColour} from './loadfortunes';
import getfortune from './loadfortunes';
import {fontsize} from './fortuneretucers';
import {useSelector} from 'react-redux';
const ItemView = ({item, TextColor, index}) => {
  const setfontsize = useSelector(fontsize);
  return (
    <View style={{flex: 1, flexGrow: 1, padding: 1}}>
      <Box border={1} style={{height: '100%'}}>
        <Box style={{backgroundColor: stringToColour(item.t)}}>
          <Text>{item.t}</Text>
        </Box>
        <Box px={4}>
          <Text style={{...TextColor, fontSize: setfontsize}} selectable={true}>
            {item.f}
          </Text>
        </Box>
      </Box>
    </View>
  );
};

const SingleView = ({fortunes, isforceddarkmode}) => {
  const TextColor = isforceddarkmode ? styles.whitecolor : styles.blackcolor;
  const [index, currindex] = useState(0);
  return (
    <View style={{flex: 1}}>
      <View style={{flexGrow: 1}}>
        <ItemView item={fortunes[index]} TextColor={TextColor} index={index} />
      </View>
      <View>
        <HStack>
          <View style={{flex: 1}}>
            <Button
              onPress={() => {
                currindex(prev => Math.abs(prev - 1));
              }}>
              PREVIOUS
            </Button>
          </View>
          <View style={{flex: 1}}>
            <Button
              onPress={() => {
                currindex(prev => prev + 1);
                if (index === 199) {
                  getfortune(200);
                  currindex(0);
                }
              }}>
              NEXT
            </Button>
          </View>
        </HStack>
      </View>
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
});

export default SingleView;
