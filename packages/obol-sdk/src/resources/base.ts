// src/resources/base.ts

import fetch from 'cross-fetch';

type Config = {
  baseUrl?: string;
};

export abstract class Base {
  private baseUrl: string;

  constructor(config: Config) {
    this.baseUrl = config.baseUrl || 'https://obol-api-dev.gcp.obol.tech';
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      }
    };

    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
}
