import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Heading, HStack, IconButton, SunIcon} from 'native-base';
import {toggledarkmode} from './fortuneretucers';
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
        <View>
          <IconButton
            variant="solid"
            icon={<SunIcon />}
            onPress={() => dispatch(toggledarkmode())}
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
  },
  blackcolor: {
    backgroundColor: '#332940',
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

export default ToggleDarkMode;
