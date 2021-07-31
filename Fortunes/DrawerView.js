import React from 'react';
import {useColorScheme, StyleSheet, SafeAreaView, View} from 'react-native';
import {Heading, Divider} from 'native-base';

import SearchFortune from './SearchFortune';
import CharRange from './CharRange';
import FortunToggles from './FortuneToggles';

const DrawerView = ({drawer}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? styles.blackbg : styles.whitebg;

  return (
    <View style={{...backgroundStyle, flex: 1}}>
      <Heading style={backgroundStyle}>Settings</Heading>
      <Divider my={2} />
      <SearchFortune drawer={drawer} />
      <Divider my={2} />
      <CharRange />
      <Divider my={2} />
      <FortunToggles />
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

export default DrawerView;
