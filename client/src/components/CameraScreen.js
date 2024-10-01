import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Camera } from 'expo-camera'; // Ensure correct import
import Webcam from 'react-webcam'; // For web camera
import { useNavigation } from '@react-navigation/native';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera?.Constants?.Type?.back || 'back'); // Add fallback for web
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (Platform.OS === 'web') {
      setHasPermission(true);
    } else {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }
  }, []);

  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <Webcam
          audio={false}
          ref={cameraRef}
          screenshotFormat="image/jpeg"
          style={{ width: '100%', height: '100%' }}
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

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const toggleCameraType = () => {
    setType((current) => 
      current === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    );
  };

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
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        {/* Buttons container */}
        <View style={styles.overlay}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
              <Text style={styles.text}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
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
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
