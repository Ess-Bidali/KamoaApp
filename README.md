# Getting Started with the Kamoa App

Welcome to Kamoa App. This is a simple demonstration of the basic onboarding flow for the application.
The pending tasks are described at the bottom.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

# Project Information

This project contains a basic onboarding screen as per [the prescribed design](https://www.figma.com/file/ww9S4JLGqXRJzW3LuGItNx/M-Pesa-upload---TEST-task?type=design&node-id=0-1&mode=design&t=gTixxZEPpj1hZeTw-0)

Some pending tasks:
1. Tests
- Since there is very minimal functionality aside from designing the screens, this would probably be more centered on testing of the UI components and user interaction.

2. Images.
- Currently, a React Logo is used in place of the actual images in the design.
- The intention was to get the structure, then plug those in eventually.

3. Font
- The application currently uses the default React Native Font.
- The Barlow Font has been downloaded. The aim here was to set this as the default font once the other design aspects were completed

