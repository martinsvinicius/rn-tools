import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

import { styles } from './styles';

export default function ImageShare() {
  const [selectedImage, setSelectedImage] =
    useState<{ localUri: string } | null>(null);

  async function openImagePicker() {
    let permissionResult =
      await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Permission to access camera roll is required');
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync();

    if (pickerResult.cancelled) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  }

  async function openShareDialogAsync() {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    if (selectedImage !== null)
      await Sharing.shareAsync(selectedImage.localUri);
  }

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openImagePicker} style={styles.button}>
        <Text style={styles.buttonText}>Take another</Text>
      </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://docs.expo.io/static/images/tutorial/logo.png' }}
      />

      <Text style={styles.instructions}>
        To share a photo from you phone with a friend, just press the button
        below!
      </Text>

      <TouchableOpacity onPress={openImagePicker} style={styles.button}>
        <Text style={styles.buttonText}>Take a photo</Text>
      </TouchableOpacity>
    </View>
  );
}
