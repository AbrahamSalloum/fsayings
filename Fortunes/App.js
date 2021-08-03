import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  DrawerLayoutAndroid,
  View,
  FlatList,
} from 'react-native';
import {darkmode} from './fortuneretucers';
import getfortune from './loadfortunes';
import {NativeBaseProvider} from 'native-base';
import Prompt from './Prompt';
import FortuneItem from './FortuneItem';
import DrawerView from './DrawerView';
import {Provider, useSelector} from 'react-redux';
import {fortunefiles} from './fortuneretucers';
import {store} from './store/store.js';

const AppStart = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const drawer = useRef(null);
  const isforceddarkmode = useSelector(darkmode);
  const backgroundStyle = isDarkMode || isforceddarkmode ? styles.blackbg : styles.whitebg;
  const fortunes = useSelector(fortunefiles);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getfortune(200);
  }, []);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={() => <DrawerView drawer={drawer} isforceddarkmode={isforceddarkmode} />}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={backgroundStyle}>
        <View>
          <Prompt drawer={drawer} isforceddarkmode={isforceddarkmode} />
          <FlatList
            data={fortunes}
            renderItem={({item}) => <FortuneItem item={item} isforceddarkmode={isforceddarkmode} />}
            keyExtractor={(item, i) => i}
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              getfortune(200);
              setRefreshing(false);
            }}
          />
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
