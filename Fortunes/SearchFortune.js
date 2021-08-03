import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button, Text} from 'native-base';
import {useDispatch} from 'react-redux';
import {setsearchterm, setargs} from './fortuneretucers';
import {SearchFortuneText} from './loadfortunes';

const SearchFortune = ({drawer, isforceddarkmode}) => {
  const [searchtermlocal, setSearchTermlocal] = useState('Search Keywords..');
  const backgroundStyle = isforceddarkmode
    ? styles.whitecolor
    : styles.blackcolor;

  const dispatch = useDispatch();
  const handleChange = s => {
    setSearchTermlocal(s.nativeEvent.text);
  };

  const submit = () => {
    dispatch(setsearchterm(searchtermlocal));
    SearchFortuneText();
    drawer.current.closeDrawer();
    dispatch(setsearchterm(false));
    dispatch(setargs(`-im /${searchtermlocal}/`));
  };
  return (
    <View>
      <Input
        width="100%"
        onChange={s => handleChange(s)}
        InputRightElement={
          <Button onPress={() => submit()}>
            <Text style={{color: 'black'}}>GO</Text>
          </Button>
        }
        style={backgroundStyle}
        placeholder={'Search..'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  whitecolor: {
    color: 'white',
  },
  blackcolor: {
    color: 'black',
  },
});

export default SearchFortune;
