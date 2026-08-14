/// <reference types="vite/client" />

// Declare module for CSS imports with ?url suffix
declare module '*.css?url' {
  const content: string;
  export default content;
}

// Declare module for regular CSS imports
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Vite environment variables
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // Add more env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
