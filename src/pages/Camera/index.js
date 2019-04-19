import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { RNCamera } from 'react-native-camera';

const takePicture = async () => {

    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options);
    alert(data.uri);

  };

const Camera = (props) => (
    <View style={styles.container}>
    <RNCamera
      ref={ref => {
        this.camera = ref;
      }}
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
    />
    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
      <TouchableOpacity onPress={takePicture} style={styles.capture}>
        <Text style={{ fontSize: 14 }}> SNAP </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
});

export default Camera;
