const express = require('express');
const request = require('request');

const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route    GET api/profile/me
//@desc     Get current users profile
//@access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for user' });
    }

    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required')
        .not()
        .isEmpty(),
      check('skills', 'Skills is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      status,
      skills,
      location,
      income,
      outcome,
      bio,
      website,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin
    } = req.body;
    //Build profile objects
    const profileFields = {};
    profileFields.user = req.user.id;
    if (status) profileFields.status = status;
    if (location) profileFields.location = location;
    if (income) profileFields.income = income;
    if (outcome) profileFields.outcome = outcome;
    if (bio) profileFields.bio = bio;
    if (website) profileFields.website = website;
    if (skills) {
      profileFields.skills = skills.split(',').map(skill => skill.trim());
    }
    //build social object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (facebook) profileFields.social.facebook = facebook;
    if (twitter) profileFields.social.twitter = twitter;
    if (instagram) profileFields.social.instagram = instagram;
    if (linkedin) profileFields.social.linkedin = linkedin;

    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'avatar']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove user posts
    //await Post.deleteMany({ user: req.user.id });
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/profile/students
// @desc     Add profile students
// @access   Private
router.put(
  '/students',
  [
    auth,
    [
      check('name', 'Studnt name is requierd')
        .not()
        .isEmpty(),
      check('location', 'Studnt location is requierd')
        .not()
        .isEmpty(),
      check('progress', 'Studnt progress is requierd')
        .not()
        .isEmpty(),
      check('progress', 'Progress must be Numeric between 0-6')
        .isNumeric()
        .isIn([0, 1, 2, 3, 4, 5, 6])
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, location, progress, current, description } = req.body;

    const newStudent = {
      name,
      location,
      progress,
      current,
      description
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.students.unshift(newStudent);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/profile/students/:std_id
// @desc     Remove students from profile
// @access   Private

router.delete('/students/:std_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    //Get remove index
    const removeIndex = profile.students
      .map(item => item.id)
      .indexOf(req.params.std_id);
    profile.students.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// ------------------------------------------------------------------

// @route    PUT api/profile/tasks
// @desc     Add profile students
// @access   Private
router.put(
  '/tasks',
  [
    auth,
    [
      check('studentName', 'Studnt name is requierd')
        .not()
        .isEmpty(),
      check('info', 'Studnt info is requierd')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { studentName, info } = req.body;

    const newTask = {
      studentName,
      info
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.tasks.unshift(newTask);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/profile/tasks/:task_id
// @desc     Remove tasks from profile
// @access   Private

router.delete('/tasks/:task_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    //Get remove index
    const removeIndex = profile.tasks
      .map(item => item.id)
      .indexOf(req.params.task_id);
    profile.tasks.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
