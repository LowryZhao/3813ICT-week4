const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(express.json()); 
app.use(cors());

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});

class User {
  constructor(username, birthdate, age, email, password, valid) {
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.password = password;
    this.valid = valid;
  }
}

const users = [
  new User('user1', '2000-07-01', 25, '123@qq.com', '123', true),
  new User('user2', '2001-07-01', 24, '456@qq.com', '456', true),
  new User('user3', '2002-07-01', 23, '789@qq.com', '789', true)
];

app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;
  const foundUser = users.find(user => user.email === email && user.password === password);

  if (foundUser) {
    res.json({
      username: foundUser.username,
      birthdate: foundUser.birthdate,
      age: foundUser.age,
      email: foundUser.email,
      valid: true
    });
  } else {
    res.json({ valid: false, message: 'Invalid email or password' });
  }
});
