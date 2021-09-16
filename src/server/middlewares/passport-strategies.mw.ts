import * as passport from 'passport';
import * as PassportLocal from 'passport-local';
import * as PassportJWT from 'passport-jwt';
import db_users from '../db/queries/users';
import { comparePasswords } from '../../utils/passwords';
import { Payload, userTable } from '../../types';
import { jwtConfig } from '../config';
import { Application } from 'express';

export const configurePassport = (app: Application) => {

    passport.serializeUser((user: userTable, done) => {
        user.password ? delete user.password : null;
        done(null, user);
    });
    passport.deserializeUser((user, done) => done(null, user));

    passport.use(new PassportLocal.Strategy({
        usernameField: 'email'
    }, async (email, password, done) => {
        try {
            const [userFound] = await db_users.find('email', email);
            if (userFound && comparePasswords(password, userFound.password)) {
                done(null, userFound)
            } else {
                done(null, false);
            }
        } catch (error) {
            done(error);
        }
    }));

    passport.use(new PassportJWT.Strategy({
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtConfig.secret
    }, (payload: Payload, done) => {
        try {
            done(null, payload);
        } catch (error) {
            done(error);
        }
    }));
    app.use(passport.initialize());
}
