import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import PrimerScreen from './src/screens/primer.screen';
import PermissionsScreen from './src/screens/permissions.screen';
import UploadScreen from './src/screens/upload.screen';
import OnboardingResultScreen from './src/screens/onboarding-result.screen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="PrimerScreen" component={PrimerScreen} />
        <Stack.Screen name="UploadScreen" component={UploadScreen} />
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
        <Stack.Screen name="LoginScreen" component={PrimerScreen} />
        <Stack.Screen
          name="OnboardingResultScreen"
          component={OnboardingResultScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
