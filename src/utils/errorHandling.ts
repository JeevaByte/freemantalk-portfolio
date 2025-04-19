import { AxiosError } from 'axios';

export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode?: number,
    public details?: unknown
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export const handleApiError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof AxiosError) {
    return new AppError(
      error.response?.data?.message || error.message,
      error.response?.data?.code || 'API_ERROR',
      error.response?.status,
      error.response?.data
    );
  }

  if (error instanceof Error) {
    return new AppError(error.message, 'UNKNOWN_ERROR');
  }

  return new AppError('An unexpected error occurred', 'UNKNOWN_ERROR');
};

export const logError = (error: unknown, context?: string) => {
  const appError = handleApiError(error);
  
  console.error(`[${context || 'App'}] Error:`, {
    message: appError.message,
    code: appError.code,
    statusCode: appError.statusCode,
    details: appError.details,
    stack: appError.stack,
  });

  // Here you could add error reporting to a service like Sentry
  // if (process.env.NODE_ENV === 'production') {
  //   Sentry.captureException(appError);
  // }
};

export const isNetworkError = (error: unknown): boolean => {
  if (error instanceof AxiosError) {
    return !error.response;
  }
  return false;
};

export const isAuthError = (error: unknown): boolean => {
  if (error instanceof AxiosError) {
    return error.response?.status === 401 || error.response?.status === 403;
  }
  return false;
}; 