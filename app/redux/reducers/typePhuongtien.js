import { TYPE_PHUONGTIEN_ID, TYPE_PHUONGTIEN_LAW_ID } from '../types';

const initialState = {
  typePhuongtienId: 1,
  typePhuongtienLawId: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPE_PHUONGTIEN_ID:
      return {
        ...state,
        typePhuongtienId: action.typePhuongtienId
      }
    case TYPE_PHUONGTIEN_LAW_ID:
      return {
        ...state,
        typePhuongtienLawId: action.typePhuongtienLawId
      }
    default:
      return state;
  }
}