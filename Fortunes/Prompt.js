import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {IconButton, HamburgerIcon, HStack, Center} from 'native-base';
import {args} from './fortuneretucers';

const Prompt = ({drawer, isforceddarkmode}) => {
  const TextColor = isforceddarkmode ? styles.greencolor : styles.blackcolor;
  const Iconbg = isforceddarkmode ? styles.darkiconcolor : styles.lighticoncolor;
  const getargs = useSelector(args);
  return (
    <View border={1}>
      <HStack>
        <Center>
          <IconButton
            variant="solid"
            icon={<HamburgerIcon style={Iconbg} />}
            onPress={() => {
              drawer.current.openDrawer();
            }}
            color="white"
            style={Iconbg}
          />
        </Center>
        <Center>
          <Text style={{...TextColor, fontFamily: 'monospace'}}>
            root@android:# fortune {getargs}
          </Text>
        </Center>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  greencolor: {
    color: '#41FF00',
  },
  blackcolor: {
    color: 'black',
  },
  darkiconcolor: {
    backgroundColor: '#332940',
    color: 'white',
  },
  lighticoncolor: {
    backgroundColor: 'white',
    color: 'black',
  },
});

export default Prompt;
