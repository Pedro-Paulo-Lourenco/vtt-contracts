export type UUID = string;
export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
export type JsonObject = { [key: string]: JsonValue };

export interface ApiError {
  code: string;
  message: string;
  correlationId?: string;
  details?: JsonObject;
}

export interface ApiSuccess<T> {
  data: T;
  correlationId?: string;
}

export interface ViewPreferences {
  zoom: number;
  panX: number;
  panY: number;
  aba?: string;
}

export interface GridConfig {
  enabled: boolean;
  size: number;
  color?: string;
  opacity?: number;
}
