// extendable

class Firebase {
  constructor(app, config) {
    app.initializeApp(config);
    this.auth = app.auth();
    this.firestore = app.firestore();
  }

  // *** Auth API ***
  doSignInWithToken = (token) => this.auth.signInWithCustomToken(token);

  doSignOut = () =>
    this.auth.signOut().then(() => localStorage.removeItem("authUser"));

  // *** Merge Auth and DB User API ***
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then(async (snapshot) => {
            if (snapshot.exists) {
              const dbUser = snapshot.data();
              if (!dbUser.hasOwnProperty("roles")) {
                dbUser.roles = {
                  guest: true,
                };
                await this.user(authUser.uid).update(dbUser);
              }

              authUser = {
                uid: authUser.uid,
                email: authUser.email,
                emailVerified: authUser.emailVerified,
                providerData: authUser.providerData,
                ...dbUser,
              };

              next(authUser);
            } else {
              const dbUser = {
                roles: {
                  guest: true,
                },
              };

              this.user(authUser.uid)
                .set(dbUser)
                .then(() => {
                  authUser = {
                    uid: authUser.uid,
                    email: authUser.email,
                    emailVerified: authUser.emailVerified,
                    providerData: authUser.providerData,
                    ...dbUser,
                  };

                  next(authUser);
                });
            }
          })
          .catch(console.error);
      } else {
        fallback();
      }
    });

  // *** User API ***
  user = (uid) => this.firestoreRoot.doc(`users/${uid}`);
  users = () => this.firestoreRoot.collection("users");
}

let firebase;

const getFirebase = (app, config) => {
  if (!firebase) {
    firebase = new Firebase(app, config);
  }

  return firebase;
};

export default getFirebase;
