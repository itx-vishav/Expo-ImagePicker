import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";
import { openCamera, openGallery } from "./src/ImagePickerUtils";
import ImagesPager from "./src/ImagesPager";

export default function App() {
  const [images, setImages] = useState([]);

  const updateState = (uri) => {
    setImages([...images, uri]);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await openGallery();
    if (!result.cancelled) {
      updateState(result.assets[0].uri);
    }
  };

  const captureImage = async () => {
    let result = await openCamera();
    if (!result.cancelled) {
      updateState(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ ...styles.container, gap: 10 }}>
        <Button title="Pick an image from photos" onPress={pickImage} />
        <Button title="Pick an image from camera roll" onPress={captureImage} />
      </View>

      <ImagesPager images={images} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
