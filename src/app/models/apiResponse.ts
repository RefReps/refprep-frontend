export interface ApiResponse {
  success?: boolean;
  payload?: any;
  error?: ErrorResponse;
}

export interface ErrorResponse {
  name: string;
  message: string;
}
