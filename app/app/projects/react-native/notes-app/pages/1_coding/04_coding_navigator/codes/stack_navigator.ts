export const stack_navigatorTs = `
/* TODO: import NavigationContainer dari @react-navigation/native
   TODO: import createStackNavigator dari @react-navigation/stack
   TODO: import TabNavigator dari ./TabNavigator
   TODO: import DetailNoteScreen dari ./screens/DetailNoteScreen
*/ 

export default function StackNavigator() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home'>
                <Stack.Screen
                    name="home"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='detail'
                    component={DetailNoteScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

`