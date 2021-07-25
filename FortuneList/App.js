import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  DrawerLayoutAndroid,
  Text,
  View,
} from 'react-native';

import {NativeBaseProvider, FlatList, IconButton} from 'native-base';
import fortune from '../jsonfortunes/songs-poems.json';
import Prompt from './Prompt';
import FortuneItem from './FortuneItem';
import DrawerView from './DrawerView';

const AppStart = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const drawer = useRef(null);
  const backgroundStyle = isDarkMode ? styles.blackbg : styles.whitebg;

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={DrawerView}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={backgroundStyle}>
        <View>
          <Prompt drawer={drawer} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <FlatList
              data={fortune}
              renderItem={({item}) => <FortuneItem item={item} />}
              keyExtractor={item => item.k}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  blackbg: {
    backgroundColor: 'black',
  },
  whitebg: {
    backgroundColor: 'white',
  },
});

const App = () => {
  return (
    <NativeBaseProvider>
      <AppStart />
    </NativeBaseProvider>
  );
};
export default App;
