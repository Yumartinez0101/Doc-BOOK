# Doc-BOOK 📅

![Doc-BOOK Logo](https://img.shields.io/badge/Doc--BOOK-Appointment%20Booking%20App-brightgreen)

Welcome to **Doc-BOOK**, a MERN stack appointment booking application designed to connect doctors, patients, and admins. This app uses the Redux Toolkit to enhance scheduling and patient care, ensuring a smooth experience for all users.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Releases](#releases)

## Features

- **User Authentication**: Secure login for doctors, patients, and admins.
- **Appointment Scheduling**: Easy booking and management of appointments.
- **Real-Time Updates**: Changes reflect immediately for all users.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Admin Dashboard**: Manage users and appointments efficiently.

## Technologies Used

This project utilizes a variety of technologies to create a robust application:

- **MERN Stack**: MongoDB, Express.js, React.js, Node.js
- **Redux Toolkit**: For state management
- **Tailwind CSS**: For modern styling
- **Framer Motion**: For animations
- **Git & GitHub**: For version control

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Yumartinez0101/Doc-BOOK.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Doc-BOOK
   ```

3. **Install Dependencies**:

   For the server:

   ```bash
   cd server
   npm install
   ```

   For the client:

   ```bash
   cd client
   npm install
   ```

4. **Set Up Environment Variables**:

   Create a `.env` file in the `server` directory and add the required environment variables:

   ```plaintext
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the Application**:

   Start the server:

   ```bash
   cd server
   npm start
   ```

   Start the client:

   ```bash
   cd client
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

Once the application is running, you can:

- Register as a doctor or patient.
- Log in to your account.
- Book, reschedule, or cancel appointments.
- Admins can manage users and appointments from the dashboard.

## Contributing

We welcome contributions to enhance this project. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your branch.
5. Create a pull request.

Please ensure your code adheres to our coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Releases

For the latest releases, please visit [here](https://github.com/Yumartinez0101/Doc-BOOK/releases). You can download and execute the files from this section.

![Release Button](https://img.shields.io/badge/Check%20Releases-blue)

Feel free to explore the releases for updates and improvements!

---

Thank you for checking out **Doc-BOOK**! We hope this application meets your appointment booking needs effectively.