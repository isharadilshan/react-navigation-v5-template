# React Native React Navigation Template

This is an example app developed with [React Native](https://reactnative.dev).
If you haven't setup the development environment yet follow this official documentation(https://reactnative.dev/docs/environment-setup)

## Table of Contents

- [Project setup](#project-setup)
- [Change Project Name](#change-project-name)
- [Available Scripts](#available-scripts)
  - [yarn start or npm start](#yarn-start-or-npm-start)
  - [react-native run-ios](#react-native-run-ios)
  - [react-native run-android](#react-native-run-android)
  - [npm run eject](#npm-run-eject)
- [Troubleshooting](#troubleshooting)
  - [iOS Simulator won't open](#ios-simulator-wont-open)

## Project Setup

```
//clone project repo
https://github.com/isharadilshan/rn_react_navigation_v5_template.git

//changing to project directory
cd rn_react_navigation_v5_template

//install packages with yarn :heart_eyes: or npm
yarn install
#or
npm install

```

## Change Project Name

There is a great npm package to help you out. You can easily change current project name to yours, otherwise it may be a headache. Just follow the commands below or try this(https://www.npmjs.com/package/react-native-rename) for more info.

```
//install package globally

yarn global add react-native-rename
#or
npm install react-native-rename -g

//usage
react-native-rename <newName>
```

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `yarn start or npm start`

Runs your app in development mode.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `react-native run-ios`

Like `yarn start or npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `react-native run-android`

Like `yarn start or npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://reactnative.dev) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## Troubleshooting

### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

- "non-zero exit code: 107"
- "You may need to install Xcode" but it is already installed
- and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1. Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2. Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.
3. If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.
