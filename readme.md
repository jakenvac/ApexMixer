!['Apex Mixer'](./readme.assets/logo.png)

A simple Apex Legends randomizer to spice up your life! 🌶 [Roll Here!](https://apexmixer.fun)

## Future goals

- Challenges
- Interactive Map
- Improved detail on Map
- Improved mobile layout

### Really far future goals

- Link to specific randomizations & maybe link VODs from Twitch/YT

## Contribution

All help on Apex Mixer is welcome. Please write jest tests for any public methods on the Apex Lib - TDD is preferred.

Please check the issue tracker for details on what needs to be done.

## Development

Apex mixer is written in Typescript & React. For styling, styled-components are used. Parcel is the bundler.

### Testing

`npm t` will do a single pass of Jest Tests

### Running

`npm start` will run a development server at `localhost:1234`

### Building

`npm run build` will produced a minified build at `dist/prod/`

### Publishing

`npm run publish` (**Not** `npm publish`) will produce a minified build in `/docs` where github pages serves it from. Typically this will only be done by a project maintainer so try to keep publishes out of pull requests.
