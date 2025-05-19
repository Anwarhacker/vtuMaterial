const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const cloudinary = require('./utils/cloudinary');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Image upload endpoint
app.post('/api/upload', async (req, res) => {
  try {
    const { image } = req.body;
    
    if (!image) {
      return res.status(400).json({ message: 'No image provided' });
    }

    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: 'user_profiles',
      transformation: [
        { width: 800, crop: "scale" },
        { quality: "auto" }
      ]
    });

    res.json({
      url: uploadResponse.secure_url,
      public_id: uploadResponse.public_id
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Image upload failed' });
  }
});

// Registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password, profileImage } = req.body;

    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (existingUser) {
      return res.status(400).json({ 
        message: existingUser.email === email ? 
          'Email already registered' : 
          'Username already taken' 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profileImage,
     
      
    });

    await newUser.save();

    res.status(201).json({
      message: 'Registration successful! Please log in.',
      user: {
        username: newUser.username,
        email: newUser.email,
        profileImage: newUser.profileImage,
      
       

      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
});




app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error getting users" });
    }
});



// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Success: return user info (omit password)
    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: "Login failed. Please try again." });
  }
});

// First, add the Commit model schema
const commitSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Commit = mongoose.model('Commit', commitSchema);

// Then add the commit route
app.post('/api/commit', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message.trim()) {
      return res.status(400).json({ message: 'Commit message is required' });
    }

    const newCommit = new Commit({
      message: message.trim()
    });

    await newCommit.save();

    res.status(201).json({
      message: 'Commit saved successfully',
      commit: newCommit
    });
  } catch (error) {
    console.error('Commit error:', error);
    res.status(500).json({ message: 'Failed to save commit' });
  }
});
// Add this after your existing routes

// Fetch all commits route
app.get('/api/commits', async (req, res) => {
    try {
        const users = await Commit.find({}, { password: 0 });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error getting users" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));