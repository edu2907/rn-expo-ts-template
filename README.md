# React Native Expo Typescript Template

React Native Expo managed workflow template, with some common packages for 
building apps for Android and Web.

*Note: At now, IOS isn't officially suported, but it should work fine with it,
at most may need some additional steps*

## Packages

- [Expo](https://docs.expo.dev/)
- [Navigation Router for React Native](https://grahammendick.github.io/navigation/native/)
- [Zod](https://zod.dev/) (Required for enviroment variables validation)

## Setup 

1. Rename instances of "rntemplate" with your desired project name
2. Edit env.js to set your desired env variables, according to [the enviroment variables section below](#EnviromentVariables) 
3. Replace the default icons with your desired app icons
4. Run the command for building you app
    1. On web: `yarn run web`
    2. On Android with dev client: `yarn run android`

## App Icon
For guidance on how to set up your app icons, check [Expo app icons guide](https://docs.expo.dev/develop/user-interface/app-icons/)
and 

<h2><a href="#EnviromentVariables">Enviroment Variables</a></h2>

The config is based on ["Environment Variables in React Native: The Right Way!" post by Youssouf,](https://elazizi.com/posts/environment-variables-in-react-native-the-right-way/)
check it before setting things up. You should only edit `client`, `buildTime`, `_clientEnv` and `_buildEnv`
const variables with your desired env vars.