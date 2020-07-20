import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={style.header}>
      <Text style={style.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};

export default Header;

const style = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 23,
  },
});