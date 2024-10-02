import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import Webcam from 'react-webcam';
import { useNavigation } from '@react-navigation/native';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [type, setType] = useState('back');
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (Platform.OS !== 'web') {
      requestPermission();
    }
  }, []);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <Webcam
          audio={false}
          ref={cameraRef}
          screenshotFormat="image/jpeg"
          style={styles.camera}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {
            const screenshot = cameraRef.current.getScreenshot();
            console.log(screenshot);
          }}>
            <Text style={styles.text}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (!permission || !permission.granted) {
    return (
      <View style={styles.container}>
        <Text>Camera permission is required</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.text}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log(photo);
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        type={type}
        ref={cameraRef}
      >
        <View style={styles.overlay}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
              <Text style={styles.text}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});