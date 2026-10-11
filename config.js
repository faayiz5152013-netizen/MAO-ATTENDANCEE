/* Optional pre-set connection for this copy of the app.
   Fill this in ONCE before you host the app and every phone that opens it is already pointed at your Google Sheet,
   so a co-coordinator only types a username and password. Leave a value empty to type it on the sign-in screen instead.
   You can also skip this file and use More > "Copy invite link" inside the app. */
window.MAO_CONFIG = {
  scriptUrl: '',        // Server mode: the Web App URL from Apps Script (Deploy > Manage deployments), ends with /exec
  googleClientId: '',   // Sheet-link mode only: Google OAuth Client ID (…apps.googleusercontent.com)
  sheetLink: ''         // Sheet-link mode only: the Google Sheet's link
};
