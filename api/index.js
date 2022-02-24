import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import multer from 'multer';
import path from 'path';
import morgan from 'morgan';

import userRoute from './routes/user';
import authRoute from './routes/auth';
import postRoute from './routes/post';

const app = express();
const __dirname = path.resolve();
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to MongoDB')
);

app.use('/images', express.static(path.join(__dirname, 'public/images')));

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
})

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('Uploaded');
  } 
  catch (err) {
    console.error(err);
  }
});

app.listen(8800, () => {
  console.log('Server started on port 8800');
})