declare global {
  interface Window {
    fakeEnv?: string;
    fakeStandby?: boolean;
    fakeAuthStatus?: string;
    fakeAuthUser?: any;
  }
}

export {};
