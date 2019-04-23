import React, { PureComponent } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import { View, Text, Image, StyleSheet, Input, AsyncStorage } from "react-native";

import Button from "../../components/Button";
import FormTextInput from "../../components/FormTextInput";

import {} from "./styles";

const imageLogo = "https://www.freelogodesign.org/Content/img/logo-ex-5.png";

export default class Login extends PureComponent {

  constructor() {
    super();

    this.signIn = this.signIn.bind(this);
  }

  state = {
    
    username: '',
    password: '',
    loading: false

  };

  handleUsernameChange = username => {
    this.setState({ username: username });
  };

  handlePasswordChange = password => {
    this.setState({ password: password });
  };

  saveUser = async (username) => {

    await AsyncStorage.setItem('@AppHackathonBoilerplate:username', username)

  }

  async signIn () {

    const { username } = this.state;

    if(username.length === 0 ) return;

    this.setState({ loading: true });

    try {

        await this.saveUser(username);

        const resetAction = StackActions.reset ({

            index: 0,
            actions: [

              NavigationActions.navigate({ routeName: 'App' }),

            ]

        });

        this.props.navigation.dispatch(resetAction);

    } catch(err) {

      this.setState({ loading: false, errorMessage: 'Usuário não existe' });

    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: imageLogo }} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
            placeholder={"Nome do usuário"}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={"Senha"}
          />
          <Button label={"Login"} onPress={this.signIn} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});
