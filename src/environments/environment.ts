export const environment = {
  production: false,
  googleConfiguration: {
    client_id: '209689905225-dj1bo29m0c7or5926cv4bb1nu5aru0cv.apps.googleusercontent.com',
    client_secret: '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',
    scopes: [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/contacts',
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
    redirect_uri: 'http://localhost:4200/google/authorization',
  },
};
