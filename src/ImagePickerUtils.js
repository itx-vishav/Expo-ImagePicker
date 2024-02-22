import * as ImagePicker from "expo-image-picker";
import { getCameraPermission } from "./Permissions";

const IMAGE_CONFIG = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  quality: 1,
  aspect: [4, 3],
  allowsMultipleSelection: true,
};

const handleResult = (result) => {
  if (!result.cancelled) {
    return result;
  }
  return false;
};

export const openCamera = async () => {
  const granted = await getCameraPermission();
  if (granted) {
    try {
      let result = await ImagePicker.launchCameraAsync(IMAGE_CONFIG);
      return handleResult(result);
    } catch (error) {
      console.log("Error occurred while launching the camera: ", error);
    }
  }
};

export const openGallery = async () => {
  try {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync(IMAGE_CONFIG);
    return handleResult(result);
  } catch (error) {
    console.log("Error occurred while launching the camera: ", error);
  }
};
