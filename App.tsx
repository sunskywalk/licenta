// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
  );
};

export default App;