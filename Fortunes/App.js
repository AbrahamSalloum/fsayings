import React, {useRef, useEffect} from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  DrawerLayoutAndroid,
  View,
  Text,
} from 'react-native';

import {
  darkmode,
  singleeview,
  fortunefiles,
  getFortuneSelection,
  setstoreddarkmode,
} from './fortuneretucers';

import getfortune from './loadfortunes';
import {NativeBaseProvider} from 'native-base';
import Prompt from './Prompt';
import DrawerView from './DrawerView';
import FortListView from './FortListView';
import SingleView from './SingleView';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {store} from './store/store.js';

const AppStart = () => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const drawer = useRef(null);
  const isforceddarkmode = useSelector(darkmode);
  const issingleview = useSelector(singleeview);
  const backgroundStyle =
    isDarkMode || isforceddarkmode ? styles.blackbg : styles.whitebg;
  const fortunes = useSelector(fortunefiles);

  useEffect(() => {
    const x = async () => {
      let xy = await getFortuneSelection();
      dispatch(setstoreddarkmode(xy));
      getfortune(200);
    };
    x();
  }, []);
  while (!!fortunes === false) {
    return <Text>...</Text>;
  }
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={() => (
        <DrawerView drawer={drawer} isforceddarkmode={isforceddarkmode} />
      )}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={{...backgroundStyle, flex: 1}}>
        <View>
          <Prompt drawer={drawer} isforceddarkmode={isforceddarkmode} />
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          {issingleview ? (
            <SingleView
              fortunes={fortunes}
              isforceddarkmode={isforceddarkmode}
            />
          ) : (
            <FortListView fortunes={fortunes} />
          )}
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
    color: 'white',
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
    backgroundColor: '#332940',
  },
  whitebg: {
    backgroundColor: 'white',
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <AppStart />
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
