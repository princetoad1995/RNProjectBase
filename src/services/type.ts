export interface IResponseError {
  status: number;
  data: {
    error?: string;
    error_description?: string;
    hint?: string;
    message: string;
  };
}

export interface IResponseCommon {
  status: number;
  statusText?: string | undefined;
}
