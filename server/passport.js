
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const { User, FacebookUser } = require('./model/userModel');

// Initialize Express app
const app = express();

// Configure express-session middleware with enhanced security
app.use(session({
  resave: false,
  saveUninitialized: true.valueOf,
  secret: process.env.SESSION_SECRET,
 
}));

// Initialize passport middleware
app.use(passport.initialize());

app.use(passport.session());


passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  
    cb(null, id);
 
});



passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_SECRET_KEY,
  callbackURL: "http://localhost:5000/api/auth/facebook/callback"
},

async (accessToken, refreshToken, profile, cb) => {
  try {
    const avatar = profile.photos && profile.photos.length > 0 ? profile.photos[0].value : "";
    const fbuser = new FacebookUser({
      username: profile.displayName,
      email: profile.email,
      avatar: avatar
    });

    await fbuser.save();
    return cb(null, fbuser);
  } catch (err) {
    console.error(err); // Log errors for debugging
    return cb(err, null);
  }
}));

