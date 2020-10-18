const GoogleStrategy = require('passport-google-oauth20').Strategy
const db = require('../../database/index')

const google = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.BASE_URL}/api/auth/google/redirect`
  },
  async (token, tokenSecret, profile, done) => {

    try {
      const checkUser = await db.query(`
        SELECT 
          user_id, role_id, family_name, given_name, login
        FROM 
          users
        WHERE
          user_id = ${profile.id}
      `)
      // Найден
      if (typeof checkUser[0][0] != 'undefined') {
        // Объект найденого пользователя
        return done(null, {
          user_id: profile.id,
          role_id: checkUser[0][0].role_id,
          family_name: checkUser[0][0].family_name,
          given_name: checkUser[0][0].given_name,
          login: checkUser[0][0].login
        })
      }
      // Не найден
      else {
        const newUser = await db.query(`
          INSERT INTO users 
            (user_id, family_name, given_name, email, email_verified, role_id, login) 
          VALUES 
            (
              '${profile.id}', 
              '${profile.name.familyName}', 
              '${profile.name.givenName}', 
              '${profile.emails[0].value}', 
              ${profile.emails[0].verified},
              ${1},
              '${profile.id}'
            );
        `)
        if (newUser[0].warningStatus != 0) {
          return done(null, {signInError: true})
        }
        else {
          // Объект нового пользователя
          return done(null, {
            user_id: profile.id,
            role_id: 1,
            family_name: profile.name.family_name,
            given_name: profile.name.given_name,
            login: profile.id
          })
        }
      }
    } 
    catch (error) {
      console.log(error);
      return done(null, {error: true})
    }
  }
)

module.exports = google