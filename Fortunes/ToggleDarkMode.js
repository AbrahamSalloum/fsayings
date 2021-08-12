import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Heading,
  HStack,
  IconButton,
  SunIcon,
  ArrowDownIcon,
  Slider,
} from 'native-base';
import {toggledarkmode, togglesingleview, setfontsize} from './fortuneretucers';
import {useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <HStack>
        <View style={{marginRight: 3}}>
          <MaterialCommunityIcons
            name="format-size"
            size={26}
            style={backgroundStyle}
          />
        </View>
        <View style={{marginRight: 3, flex: 1}}>
          <Slider
            defaultValue={16}
            minValue={16}
            maxValue={72}
            accessibilityLabel="hello world"
            onChange={v => {
              dispatch(setfontsize(v));
            }}
            step={1}>
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
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
