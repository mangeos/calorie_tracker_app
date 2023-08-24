# Weight & Calories Tracker App

![App Screenshot](/images/screenshot.png)

This is a comprehensive health tracking application designed to help users monitor their daily caloric intake and track their weight changes over time. The app consists of a frontend built with React and a microservice-based backend that utilizes both Node.js and Java. The backend is powered by MongoDB to store and manage user data.

## Features

- Track daily caloric intake by adding foods and their calorie values.
- Record weight measurements at regular intervals.
- Visualize calorie and weight trends over time.
- Backend built as a microservice using Node.js and Java.
- Data storage and management using MongoDB.
- Implement user authentication and personalized tracking.
- **User Authentication:** Log in securely using Google OAuth2 for a personalized experience.

## Screenshots

![Adding Food](/images/caloriesPic.png)

![Tracking Weight](/images/weightPic.png)

## Backend Microservices

- Node.js Microservice: Handles food and calorie tracking.
- Java Microservice: Manages weight tracking and trends.
- Both microservices communicate with MongoDB for data storage.

## Installation

1. Clone the repository.
2. Set up the Node.js and Java microservices (detailed instructions in respective directories).
3. Start the microservices.
4. Navigate to the project directory and run `npm install` for the React frontend.
5. Run `npm start` to launch the frontend development server.

## Technologies Used

- React for the frontend.
- Node.js and Express for the Node.js microservice.
- Java for the Java microservice.
- MongoDB for data storage and management.

## Future Enhancements

- Enhance data visualization with graphs and charts.
- Allow users to set goals and receive insights.
- **Store Products and Calories in the Database:** Enhance the backend to store and retrieve food products from the MongoDB database.

Feel free to contribute and provide feedback!
