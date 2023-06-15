const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');
const { getCoordinates } = require('./getCoordinates');

const coordinates = getCoordinates();
// Load the image
Jimp.read('./batch/003b5b458a552c47956a813fe475cc93.jpg')
  .then((image) => {
    const imageWidth = image.bitmap.width;
    const imageHeight = image.bitmap.height;

    // YOLO normalized bounding box coordinates
    const yoloX = coordinates[0];
    const yoloY = coordinates[1];
    const yoloWidth = coordinates[2];
    const yoloHeight = coordinates[3];

    // Convert normalized coordinates to pixel coordinates
    const pixelX = yoloX * imageWidth;
    const pixelY = yoloY * imageHeight;
    const pixelWidth = yoloWidth * imageWidth;
    const pixelHeight = yoloHeight * imageHeight;

    // Calculate top-left corner coordinates and dimensions
    const x = pixelX - pixelWidth / 2;
    const y = pixelY - pixelHeight / 2;
    const width = pixelWidth;
    const height = pixelHeight;

    image
      .crop(x, y, width, height)
      .normalize()
      .write('./croppedImages/cropped_image.jpg'); // Save the cropped image
  })
  .catch((error) => {
    console.error(error);
  });
