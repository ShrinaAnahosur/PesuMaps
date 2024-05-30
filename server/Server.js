const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a mongoose schema
const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model('Message', messageSchema);

app.use(bodyParser.json());

app.post('/api/send-message', async (req, res) => {
  try {
    const { message } = req.body;

    // Save the message to MongoDB
    const newMessage = new Message({ message });
    await newMessage.save();

    console.log('Message saved to MongoDB:', message);

    res.status(200).send('Message saved successfully!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
