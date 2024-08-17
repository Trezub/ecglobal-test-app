import Member from "@/components/Member";
import { Colors } from "@/constants/Colors";
import { api } from "@/services/api";
import type { Member as MemberType } from "@/types/Member.type";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Members() {
    const [query, setQuery] = useState("");

    const { data: members } = useQuery({
        queryKey: ["members"],
        queryFn: async () => (await api.get<MemberType[]>("/members")).data,
    });

    if (!members) {
        return (
            <ActivityIndicator
                color={Colors.light.tint}
                size={40}
                className="h-full"
            />
        );
    }

    return (
        <View className="p-3">
            <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder="Pesquisar"
                className={`px-4 py-2 bg-white rounded-lg border border-transparent focus:border-sky-700`}
            />
            <FlatList
                data={members?.filter(({ name }) =>
                    name.toLowerCase().startsWith(query.toLowerCase()),
                )}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={(e) => e.preventDefault()}
                        className="bg-white rounded-lg p-3"
                    >
                        <Member data={item} />
                    </TouchableOpacity>
                )}
                keyExtractor={({ id }, index) => index.toString()}
                ItemSeparatorComponent={() => <View className="h-3" />}
                contentContainerStyle={{
                    paddingVertical: 20,
                }}
            />
        </View>
    );
}
