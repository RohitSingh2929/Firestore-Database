import * as admin from 'firebase-admin';
import { ServiceAccount } from "firebase-admin";

const adminConfig: ServiceAccount = {
  "projectId": "YOUR_PROJECT_ID",
  "privateKey": "-----BEGIN PRIVATE KEY-----\YOUR PRIVATE KEY-----END PRIVATE KEY-----\n",
  "clientEmail": "YOUR_CLIENT_EMAIL"
};
admin.initializeApp({
  credential: admin.credential.cert(adminConfig),
  databaseURL: "YOUR_DB_URL",
});

export const firestoreAdmin = admin.firestore();