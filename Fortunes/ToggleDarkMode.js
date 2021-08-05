import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Heading, HStack, IconButton, SunIcon, ArrowDownIcon} from 'native-base';
import {toggledarkmode, togglesingleview} from './fortuneretucers';
import {useDispatch} from 'react-redux';

const ToggleDarkMode = ({isforceddarkmode}) => {
  const backgroundStyle = isforceddarkmode ? styles.blackbg : styles.whitebg;

  const dispatch = useDispatch();

  return (
    <View>
      <HStack>
        <View style={{flex: 1}}>
          <Heading style={backgroundStyle}>Settings</Heading>
        </View>
        <View style={{marginRight: 3}}>
          <IconButton
            variant="solid"
            icon={<SunIcon />}
            onPress={() => dispatch(toggledarkmode())}
          />
        </View>
        <View style={{marginRight: 3}}>
          <IconButton
            variant="solid"
            icon={<ArrowDownIcon />}
            onPress={() => dispatch(togglesingleview())}
          />
        </View>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  whitecolor: {
    backgroundColor: '#332940',
    color: '#41FF00',
    marginRight: 3,
  },
  blackcolor: {
    backgroundColor: '#332940',
    color: 'black',
  },
  blackbg: {
    backgroundColor: '#332940',
    color: 'white',
    marginRight: 3,
  },
  whitebg: {
    backgroundColor: 'white',
    color: 'black',
    marginRight: 3,
  },
});

export default ToggleDarkMode;
