Gymguru Workout Application for Windows and macOS

Welcome to the Gymguru workout application! This app allows users to create and save personalized workouts based on height, weight, gender, age, and fitness goals. The app will also uses the wger.de API in the future for a library of pre-made workouts and exercises. Keep in mind that this app is still in development. 

Prerequisites
Install the following dependencies:

. Node.js; https://nodejs.org/en/download: A JavaScript runtime for running JavaScript code outside of a web browser.

. Git; https://git-scm.com/downloads: A version control system for tracking changes in source code. (macOS users can alternatively use Xcode: https://developer.apple.com/xcode/ or Homebrew to install Git)

. AWS CLI; https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html: A command line interface for interacting with Amazon Web Services. Make sure to click on either Mac or Windows and follow the instructions to download the AWS CLI. 

. Amplify CLI: A command line interface for interacting with AWS Amplify. Install by running npm install -g @aws-amplify/cli in the Command Prompt (or Terminal on macOS).

. Expo CLI;  A command line interface for interacting with Expo. Install by running npm install -g expo-cli in the Command Prompt (or Terminal on macOS). 

. Expo App: A mobile app for testing React Native applications. Available on Apple App Store and Google Play Store that you download on your physical phone.

Setting Up Your AWS Account

1. Go to the AWS sign-up page and click "Create a new AWS account."
2. Follow the prompts to create your account. You'll need to enter your email address, create a password, and provide your full name and contact information. You'll also need to enter credit card information, as AWS requires a valid payment method for account verification.
3. Complete the AWS Identity Verification process, which includes receiving a phone call or text message and entering the provided verification code.
4. Choose a support plan. For initial testing, the Basic (free) plan is sufficient.
5. Once your account is created, access the AWS Management Console.
6. Click on your username in the top-right corner, then select "My Security Credentials."
7. Under "Access keys", click "Create access key" and download the CSV file containing your access key and secret access key.

Setting Up Amplify Environment

1. Clone the repository by running *git clone https://github.com/Rlowery1/GymGuru-App_NativeReact-Amplify.git* in the Command Prompt (or Terminal on macOS).
2. Navigate to the project directory using *cd /your/path/to/gymguru* in the Command Prompt (or Terminal on macOS). */your/path/to is just a placeholder for your actual path*
3. Initialize Amplify by running *amplify init* in the Command Prompt (or Terminal on macOS). Follow the prompts to set up your Amplify environment, including choosing a name, default text editor, and programming language. Go with the default choices.
4. Next initialize Amplify auth settings for Cognito by running *amplify add auth*.
5. When prompted to add authentication, select "Amazon Cognito User Pool" and choose the default settings.
6. Push changes to the cloud once finished, by running *amplify push* in the Command Prompt (or Terminal on macOS).

Running the Application

1. Install dependencies by running *npm install* in the Command Prompt (or Terminal on macOS).
2. Start the application using *expo start* in the Command Prompt (or Terminal on macOS).
3. Scan the QR code displayed in the terminal using the Expo app on your mobile device.

Note: If you experience connection issues, press "r" in the Command Prompt (or Terminal on macOS) to reload the app.
