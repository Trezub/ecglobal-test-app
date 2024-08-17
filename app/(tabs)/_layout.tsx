import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.light.tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Postagens",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="members/index"
                options={{
                    title: "Membros",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "people" : "people-outline"}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
