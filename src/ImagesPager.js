import React from "react";
import { Image, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";

const ImagesPager = ({ images }) => {
  return (
    <View>
      {images?.length > 0 && (
        <PagerView style={styles.viewPager}>
          {images?.map((image, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                source={{ uri: image }}
                style={styles.image}
              />
            </View>
          ))}
        </PagerView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    height: "70%",
    width: 500,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImagesPager;
