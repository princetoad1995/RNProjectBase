import AsyncStorage from '@react-native-async-storage/async-storage';

async function getStore(storeName: string) {
  try {
    return JSON.parse((await AsyncStorage.getItem(storeName)) || '');
  } catch (error) {
    return null;
  }
}

function addStore(storeName: string, stuff: any) {
  AsyncStorage.setItem(storeName, JSON.stringify(stuff));
}

function deleteStore(storeName: string[]) {
  if (storeName instanceof Array) {
    AsyncStorage.multiRemove(storeName);
  } else {
    AsyncStorage.removeItem(storeName);
  }
}

export { getStore, addStore, deleteStore };
