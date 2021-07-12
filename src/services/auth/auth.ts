import Config from 'react-native-config';
import { post } from '../network-services';
import { ILoginRequest } from './auth.model';

export const loginApi = async ({
  username,
  password,
  grant_type,
  client_id,
  client_secret,
}: ILoginRequest) => {
  return post(`${Config.API_URL}/v1/oauth/token`, {
    username,
    password,
    grant_type,
    client_id,
    client_secret,
  });
};
