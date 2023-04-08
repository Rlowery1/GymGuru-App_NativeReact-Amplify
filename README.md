Gymguru Workout Application

Welcome to the Gymguru workout application! This app allows users to create and save their own personalized workouts based on their height, weight, gender, age, and fitness goals. The app also pulls data from the wger.de API to provide a library of pre-made workouts and exercises.

Prerequisites

 Before you can use the Gymguru workout application, you'll need to download and install several dependencies:

1. Node.js: This is a JavaScript runtime that allows you to run JavaScript code outside of a web browser. Download and install the latest version of Node.js from the official website.

2. Git Bash: This is a command line interface for interacting with Git repositories. Download and install Git Bash from the official website.

3. AWS CLI: This is a command line interface for interacting with Amazon Web Services. Download and install the AWS CLI by following the instructions in the official documentation.

4. Amplify CLI: This is a command line interface for interacting with AWS Amplify, which is a set of tools and services for building scalable and secure cloud-powered mobile and web applications. Install the Amplify CLI by running the following command in your terminal:


5. Copy this code and run it in your command prompt

npm install -g @aws-amplify/cli

.Expo CLI: This is a command line interface for interacting with Expo, which is a set of tools and services for building, deploying, and managing React Native applications. Install the Expo CLI by running the following command in your terminal:

6. Copy this code and run it in your command prompt

npm install -g expo-cli

.Expo App: This is a mobile app for testing and running your React Native applications on your mobile device. Download the Expo app from the Apple App Store or Google Play Store.

Setting Up Your AWS Account

.Before you can use AWS Amplify, you'll need to create a new AWS account and a new user within that account. Follow these steps to set up your AWS account:

1. Go to the AWS sign-up page and click "Create a new AWS account".

2. Follow the prompts to create your account. You'll need to enter your email address, password, and credit card information.

3. Once you've created your AWS account, navigate to the AWS Management Console.

4. In the top-right corner of the console, click on your username and then click "My Security Credentials".

5. Click on "Create access key" under "Access keys (access key ID and secret access key)".

6. Download the CSV file that contains your access key and secret access key. Keep this file in a safe place, as you'll need it later.

.Once you've created your AWS account and user, you're ready to set up Amplify and Cognito authentication.

Setting Up Your Amplify Environment

.Follow these steps to set up your Amplify environment:

1. Clone the Gymguru workout application repository to your local machine by running the following command in your terminal:

git clone https://github.com/Rlowery1/GymGuru-App_NativeReact-Amplify.git

2. Navigate to the project directory by running the following command in your terminal:

cd gymguru

3. Initialize Amplify by running the following command:

amplify init

4. Follow the prompts to set up your Amplify environment. You'll need to choose a name for your environment, choose your default text editor, and select the programming language you're using.

5. When prompted to add authentication, select "Amazon Cognito User Pool" and choose the default settings.

6. Once you've set up your Amplify environment, push your changes to the cloud by running the following command:

amplify push

.This will create your backend resources in the cloud and generate your API endpoints.

.Running the Application

Follow these steps to run the Gymguru workout application:

1. Install the project dependencies by running the following command in your terminal:

npm install

2. Start the application by running the following command:

expo start

.Once the application has started, you'll see a QR code in your terminal. Open the Expo app on your mobile device and scan the QR code to open the application.

Note that the connection between your computer and your phone over the local network might not be optimal, so if you experience any issues, try reloading the app by pressing "r" in your terminal.

Congratulations! You've successfully set up and run the Gymguru workout application. If you have any questions or issues, please don't hesitate to reach out to our support team. Thank you for using the Gymguru workout application!
