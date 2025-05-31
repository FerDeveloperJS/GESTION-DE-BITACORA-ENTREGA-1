# Web Controller Project

This project is a web application that provides a user interface for managing activities (bitacora) and user authentication. It consists of a frontend built with HTML, CSS, and JavaScript, and a backend implemented with Node.js and Express.

## Project Structure

```
web-controller-project
├── public
│   ├── index.html          # Main entry point for the web interface
│   ├── login.html          # User login interface
│   ├── bitacora.html       # Bitacora interface for activity management
│   ├── css
│   │   ├── style.css       # Styles for the main web interface
│   │   └── bitacora.css    # Styles specific to the bitacora interface
│   └── js
│       ├── main.js         # Main functionality for the web interface
│       ├── login.js        # Login functionality
│       └── bitacora.js     # Bitacora functionality
├── src
│   ├── controllers
│   │   ├── authController.js  # Manages user authentication
│   │   └── bitacoraController.js # Manages activities
│   ├── models
│   │   ├── userModel.js       # Defines user data structure
│   │   └── actividadModel.js   # Defines activity data structure
│   ├── routes
│   │   ├── authRoutes.js       # Authentication routes
│   │   └── bitacoraRoutes.js   # Bitacora routes
│   ├── app.js                  # Initializes the Express application
│   └── server.js               # Starts the server
├── package.json                 # npm configuration file
└── README.md                    # Project documentation
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd web-controller-project
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Start the server**:
   ```
   npm start
   ```

4. **Access the application**:
   Open your web browser and navigate to `http://localhost:3000` to access the web interface.

## Usage Guidelines

- Use the login interface to authenticate users.
- Once logged in, users can access the bitacora interface to register and consult activities.
- The application supports activity registration, consultation, and report generation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.