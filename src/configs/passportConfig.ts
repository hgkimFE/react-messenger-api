/** SECTION
 *   dependancies
 *    @/configs/sessionConfig.ts
 */
import { Express } from "express";
import passport from "passport";
import { OAuth2Strategy } from "passport-google-oauth";
import sessionConfig from "@/configs/sessionConfig";

export default function (app: Express) {
  sessionConfig(app);

  app.use(passport.initialize());
  app.use(passport.session());

  const { OAUTH_GOOGLE_CLIENT_ID, OAUTH_GOOGLE_CLIENT_SECRET } = process.env;
  const googleStrategy = new OAuth2Strategy(
    {
      clientID: OAUTH_GOOGLE_CLIENT_ID,
      clientSecret: OAUTH_GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/redirect/google",
      passReqToCallback: true
    },
    async (request, accessToken, refreshToken, profile, done) => {
      // TODO
      return done(null);
    }
  );
  passport.use(googleStrategy);

  // 최초 사용자 세션 생성시
  passport.serializeUser(function (user, done) {
    console.log("serializeUser");
    done(null);
  });
  // 사용자 세션 참조시마다
  passport.deserializeUser(function (id, done) {
    console.log("deserializeUser");
    done(null);
  });
}
