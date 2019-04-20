import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Icon from "react-native-vector-icons/Ionicons";

import { HeaderContainer, Title, IconHeaderLeft } from './styles'
export default class HeaderComponent extends Component {

  handleButtonMenu = () => {
    this.props.navigation.openDrawer()
  }

  render() {
    return (
      <HeaderContainer>
        <IconHeaderLeft onPress={this.handleButtonMenu} name="ios-menu" size={26} color="#000000" />
        <Title>DrawerNavigator Example</Title>
        <Icon name="md-search" size={26} color="#000000" />
      </HeaderContainer>
    )
  }
}

HeaderComponent.propTypes = {

  

}

