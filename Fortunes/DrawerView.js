import React from 'react';
import {useColorScheme, StyleSheet, View} from 'react-native';
import {Divider} from 'native-base';
import SearchFortune from './SearchFortune';
import CharRange from './CharRange';
import FortunToggles from './FortuneToggles';
import ToggleDarkMode from './ToggleDarkMode';

const DrawerView = ({drawer, isforceddarkmode}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const isdarkmodeon = isDarkMode || isforceddarkmode 
  const backgroundStyle = isdarkmodeon ? styles.blackbg : styles.whitebg;
  return (
    <View style={backgroundStyle}>
      <Divider my={2} />
      <ToggleDarkMode isforceddarkmode={isdarkmodeon} />
      <Divider my={2} />
      <SearchFortune drawer={drawer} isforceddarkmode={isdarkmodeon} />
      <Divider my={2} />
      <CharRange isforceddarkmode={isdarkmodeon} />
      <Divider my={2} />
      <FortunToggles isforceddarkmode={isdarkmodeon} />
    </View>
  );
};

const styles = StyleSheet.create({
  whitecolor: {
    backgroundColor: '#332940',
    color: '#41FF00',
    flex: 1,
    padding: 4,
  },
  blackcolor: {
    backgroundColor: '#332940',
    color: 'black',
    flex: 1,
    padding: 4,
  },
  blackbg: {
    backgroundColor: '#332940',
    color: 'white',
    flex: 1,
    padding: 4,
  },
  whitebg: {
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
    padding: 4,
  },
});

export default DrawerView;
