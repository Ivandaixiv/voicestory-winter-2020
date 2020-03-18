import React, {useState} from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm';
import {View, Image} from 'react-native';
import SignUpForm from '../../components/SignUpForm';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';

const Home = props => {
  return (
    <View style={styles.container}>
      <LoginForm navigation={props.navigation} />
      {/* <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => {
            setFormToggle(true);
          }}
          style={formToggle && styles.borderBottom}>
          <Text style={formToggle ? styles.underline : styles.formToggle}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFormToggle(false);
          }}
          style={!formToggle && styles.borderBottom}>
          <Text style={!formToggle ? styles.underline : styles.formToggle}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      {formToggle ? <SignUpForm /> : <LoginForm />} */}
    </View>
  );
};

export default Home;
