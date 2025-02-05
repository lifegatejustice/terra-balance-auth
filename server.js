if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lifegatedetom:MChibundum@cluster0.rtlus.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const cors = require('cors');

// Log the session secret
console.log("SESSION_SECRET:", process.env.SESSION_SECRET);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.set('view-engine', 'ejs');
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

// Require the User model
const User = require('./models/User');

// Update your passport configuration to use Mongoose instead of the in-memory array.
// For example, you could update your passport-config.js file like this:
//
// passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
//   try {
//     const user = await User.findOne({ email: email });
//     if (!user) {
//       return done(null, false, { message: 'No user with that email' });
//     }
//     if (await bcrypt.compare(password, user.password)) {
//       return done(null, user);
//     } else {
//       return done(null, false, { message: 'Password incorrect' });
//     }
//   } catch (err) {
//     return done(err);
//   }
// }));
//
// passport.serializeUser((user, done) => done(null, user.id));
// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     return done(null, user);
//   } catch (err) {
//     return done(err);
//   }
// });

// You can pass functions that query MongoDB instead of the in-memory array:
const initializePassport = require('./passport-config');
initializePassport(
  passport,
  async email => await User.findOne({ email }),  // Lookup by email in MongoDB
  async id => await User.findById(id)             // Lookup by id in MongoDB
);

// Remove or comment out the in-memory users array:
// const users = [];

app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs', { name: req.user.name });
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs');
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs');
});

// Update the registration route to use MongoDB instead of the in-memory array
app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // Create a new user document
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    await user.save(); // Save the user to MongoDB
    res.redirect('/login');
  } catch (error) {
    console.error(error);
    res.redirect('/register');
  }
});

app.delete('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
}

app.listen(3000, () => console.log('Server started on port 3000'));
