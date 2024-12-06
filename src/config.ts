// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Voces del saber";
export const SITE_DESCRIPTION =
  "Voces del Saber - Institución educativa Isabel la Catolica";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Voces del saber";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
