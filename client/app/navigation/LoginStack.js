import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

function LoginStack({ signIn }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="Login">
        {(navigation) => (
          <LoginScreen signIn={signIn} navigation={navigation.navigation} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default LoginStack;
