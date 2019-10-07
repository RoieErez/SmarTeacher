const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  location: {
    type: String
  },
  income: {
    type: String
  },
  outcome: {
    type: String
  },
  bio: {
    type: String
  },
  students: [
    {
      name: {
        type: String,
        requierd: true
      },
      location: {
        type: String,
        required: true
      },
      progress: {
        type: Number, //number from 0-6 define the student progress
        require: true
      },
      current: {
        type: Boolean,
        default: true
      },
      description: {
        type: String
      }
    }
  ],
  tasks: [
    {
      studentName: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      }
    }
  ],
  website: {
    type: String
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
