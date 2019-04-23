import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

class FormTextInput extends React.Component {
  render() {
    const { style, ...otherProps } = this.props;
    return (
      <TextInput
        selectionColor='#428AF8'
        style={[styles.textInput, style]}
        {...otherProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#BEBEBE',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  }
});

export default FormTextInput;