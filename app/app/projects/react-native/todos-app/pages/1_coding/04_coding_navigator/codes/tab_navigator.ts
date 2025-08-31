export const tabNavigator_code = `
/* TODO: import {createBottomTabNavigator} dari @react-navigation/bottom-tabs
   TODO: import MaterialIcons dari react-native-vector-icons/MaterialIcons
   TODO: import Homescreen dari ./screens/Homescreen
   TODO: import AboutScreen dari ./screens/Aboutscreen
*/

export default function TabNavigator() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: '#fff',
            },
            headerStyle: {
                backgroundColor: '#007AFF',
            },
            headerTintColor: '#fff',
        }}
        >
            <Tab.Screen
                name="Home"
                component={Homescreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Beranda',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="info" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}

`