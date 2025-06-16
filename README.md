# Liquid Glass Demo

A React Native demo application showcasing Apple's new Liquid Glass design system using React Native Bottom Tabs. This project demonstrates the implementation of Apple's latest design language that combines the optical qualities of glass with fluid, dynamic interactions.

## Features

- Native bottom tabs implementation using `react-native-bottom-tabs`
- Integration with Expo Router for seamless navigation
- Implementation of Apple's Liquid Glass design system
- Dynamic tab bar animations and transitions
- Support for both light and dark themes
- Fluid, translucent UI elements with real-time rendering

## Prerequisites

- Node.js (Latest LTS version recommended)
- Expo CLI
- iOS 14.0+ for iOS development
- Android Studio for Android development

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd liquid-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Project Structure

```
liquid-demo/
├── app/
│   ├── _layout.tsx      # Root layout with navigation configuration
│   └── (tabs)/          # Tab-based navigation screens
├── assets/
│   └── fonts/          # Custom fonts
├── components/         # Reusable UI components
└── package.json
```

## Dependencies

- `@bottom-tabs/react-navigation`: ^0.9.2
- `expo`: ~53.0.11
- `expo-router`: ~5.1.0
- `react-native-bottom-tabs`: ^0.9.2
- `react-native-reanimated`: ~3.17.4

## Design System Implementation

This demo implements Apple's Liquid Glass design system, which features:

- Translucent materials that reflect and refract surroundings
- Dynamic transformations based on content and context
- Fluid animations and transitions
- Real-time rendering with specular highlights
- Adaptive light/dark mode support

## Development

### Running on iOS

```bash
npm run ios
```
## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React Native Bottom Tabs](https://callstackincubator.github.io/react-native-bottom-tabs/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Apple Liquid Glass Design System] (https://developer.apple.com/documentation/technologyoverviews/liquid-glass)