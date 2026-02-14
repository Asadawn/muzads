const API_BASE_URL = 'https://adsbackend-ruddy.vercel.app';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token_type?: string;
  message: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  verification_otp?: string;
  is_verified?: boolean;
}

export interface RegisterResponse {
  id: number;
  email: string;
  verification_otp: string;
  is_verified: boolean;
}

export interface UserResponse {
  id: number;
  email: string;
  verification_otp: string;
  is_verified: boolean;
}

export class APIError extends Error {
  constructor(public message: string, public statusCode?: number) {
    super(message);
    this.name = 'APIError';
  }
}

/**
 * Login user with email and password
 */
export async function loginUser(credentials: LoginRequest): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new APIError(data.message || 'Login failed', response.status);
    }

    return data;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError('Network error. Please check your connection.');
  }
}

/**
 * Register a new user
 */
export async function registerUser(userData: RegisterRequest): Promise<RegisterResponse> {
  try {
    const payload = {
      email: userData.email,
      password: userData.password,
      verification_otp: userData.verification_otp || '123456',
      is_verified: userData.is_verified ?? false,
    };

    console.log('📝 Registration payload:', payload);

    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log('📥 Registration response status:', response.status);

    const data = await response.json();
    console.log('📦 Registration response data:', data);

    if (!response.ok) {
      // For 422 errors, the backend usually returns validation details
      const errorMessage = data.detail 
        ? (Array.isArray(data.detail) 
            ? data.detail.map((e: any) => `${e.loc?.join('.')}: ${e.msg}`).join(', ')
            : data.detail)
        : (data.message || 'Registration failed');
      
      console.error('❌ Registration failed:', errorMessage);
      throw new APIError(errorMessage, response.status);
    }

    return data;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError('Network error. Please check your connection.');
  }
}

/**
 * Get user details by email
 */
export async function getUserByEmail(email: string): Promise<UserResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new APIError(data.message || 'Failed to fetch user', response.status);
    }

    return data;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError('Network error. Please check your connection.');
  }
}

/**
 * Store authentication token in localStorage
 */
export function setAuthToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
  }
}

/**
 * Get authentication token from localStorage
 */
export function getAuthToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token');
  }
  return null;
}

/**
 * Remove authentication token from localStorage
 */
export function removeAuthToken(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
  }
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return getAuthToken() !== null;
}
