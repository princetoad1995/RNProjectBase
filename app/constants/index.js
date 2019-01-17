import {
  Image
} from 'react-native';

export const FULL_CAU_HOI = 'FULL_CAU_HOI';
export const LIST_MAX_PACKAGE = 'LIST_MAX_PACKAGE';

export const CHUA_TRA_LOI = 0;
export const DANG_TRA_LOI = 1;
export const TRA_LOI_DUNG = 2;
export const TRA_LOI_SAI = 3;

export const showTime = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;

  return (minutes < 10 ? '0' + minutes : minutes) + ' : ' + (seconds < 10 ? '0' + seconds : seconds);
}

export const showTime2 = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;

  return (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
}

export const getSizeImage = (uriImage) => new Promise((resolve, reject) => {
  Image.getSize(uriImage, (width, height) => {
    let informationImage = {
      width,
      height
    }
    resolve(informationImage);
  }, err => {
    reject(err);
  });
});
