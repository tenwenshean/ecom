import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//root route
app.get('/', (req, res) => {
    res.send('Welcome to the Login API!'); // You can customize this message
});

// Endpoint to handle login
app.post('/login', (req, res) => {


    const { email, password } = req.body;

    // Read the users.txt file
    fs.readFile('users.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading users.txt:', err);
            return res.status(500).json({ message: 'Error reading database file' });
        }

        // Check if the email and password match any entry
        const users = data.split('\n').map(line => line.split(','));
        console.log('Parsed users:', users);

        const userExists = users.some(([storedEmail, storedPassword]) => {
            return storedEmail.trim() === email && storedPassword.trim() === password;
        });

        if (userExists) {
            // Respond with a success message and a redirect URL
            console.log('Login successful for:', email);
            res.status(200).json({
                message: 'Login successful',
                redirectUrl: '/dashboard' // Example redirect URL
            });
        } else {
            console.log('Invalid login attempt for:', email);
            res.status(401).json({ message: 'Invalid email or password' });
        }
    });
});

// Endpoint to register a new user
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    // Append the new user to the users.txt file
    const newUser = `${email},${password}\n`;
    fs.appendFile('users.txt', newUser, err => {
        if (err) {
            return res.status(500).json({ message: 'Error writing to database file' });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/dashboard', (req, res) => {
    res.send('Welcome to your dashboard!');
});

