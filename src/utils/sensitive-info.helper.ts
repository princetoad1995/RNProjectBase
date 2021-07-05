import RNSInfo from 'react-native-sensitive-info';

const deleteSInfoKey = async (key: string) => {
  return RNSInfo.deleteItem(key, {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain',
  });
};

const getAllSInfoItems = async () => {
  return RNSInfo.getAllItems({
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain',
  });
};

const getSInfoItem = async (key: string) => {
  return RNSInfo.getItem(key, {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain',
  });
};

const setSInfoItem = async (key: string, value: string) => {
  return RNSInfo.setItem(key, value, {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain',
  });
};

export { deleteSInfoKey, getAllSInfoItems, getSInfoItem, setSInfoItem };
