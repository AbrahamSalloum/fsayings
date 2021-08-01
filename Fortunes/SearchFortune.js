import React, {useState} from 'react';
import {View} from 'react-native';
import {Input, Button} from 'native-base';
import {useDispatch} from 'react-redux';
import {setsearchterm} from './fortuneretucers';
import {SearchFortuneText} from './loadfortunes';

const SearchFortune = ({drawer}) => {
  const [searchtermlocal, setSearchTermlocal] = useState('Search Keywords..');
  const dispatch = useDispatch();
  const handleChange = s => {
    setSearchTermlocal(s.nativeEvent.text.toString());
  };

  const submit = () => {
    dispatch(setsearchterm(searchtermlocal));
    SearchFortuneText();
    drawer.current.closeDrawer();
    //dispatch(setsearchterm(false));
  };
  return (
    <View>
      <Input
        width="100%"
        onChange={s => handleChange(s)}
        InputRightElement={<Button onPress={() => submit()}>GO</Button>}
        placeholder={'Search..'}
      />
    </View>
  );
};

export default SearchFortune;
