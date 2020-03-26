import React, {useEffect} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../../page/LoginScreen';
import {View} from 'react-native';
import Home from '../../page/Home';
import Profile from '../../page/Profile';
import CreateBlog from '../../page/CreateBlog';

const TabBarBottom = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: tabbarIcon('home'),
      },
    },
    Activity: {
      screen: CreateBlog,
      navigationOptions: {
        tabBarLabel: 'Create Blog',
        tabBarIcon: tabbarIcon('star'),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: tabbarIcon('address-card'),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#fff',
    barStyle: {backgroundColor: '#ff5f00'},
  },
);
const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      LoginScreen,
      TabBarBottom,
    },
    {
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);
const AuthCheck = () => {
  useEffect(() => {}, []);
  return null;
};

function tabbarIcon(name) {
  return () => <Icon name={name} color={'#fff'} size={24} />;
}

export default AppContainer;
