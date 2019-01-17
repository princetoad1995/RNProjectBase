import { TYPE_PHUONGTIEN_ID, TYPE_PHUONGTIEN_LAW_ID } from '../types';

export function saveTypePhuongtienId(typePhuongtienId) {
  return dispatch => dispatch({
    type: TYPE_PHUONGTIEN_ID,
    typePhuongtienId: typePhuongtienId,
  });
}

export function saveTypePhuongtienLawId(typePhuongtienLawId) {
  return dispatch => dispatch({
    type: TYPE_PHUONGTIEN_LAW_ID,
    typePhuongtienLawId: typePhuongtienLawId,
  });
}