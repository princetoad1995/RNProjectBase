export interface ILoginResponse {
  status: number;
  data: {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
  };
}

export interface ILoginRequest {
  username: string;
  password: string;
  grant_type: string;
  client_id: number;
  client_secret: string;
}
