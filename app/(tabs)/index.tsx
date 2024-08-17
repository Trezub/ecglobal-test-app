import Post from "@/components/Post";
import { Colors } from "@/constants/Colors";
import { api } from "@/services/api";
import { Post as PostType } from "@/types/Post.type.ts";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, FlatList, View } from "react-native";

export default function Posts() {
    const { data: posts } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => (await api.get<PostType[]>("/posts")).data,
    });

    if (!posts) {
        return (
            <ActivityIndicator
                color={Colors.light.tint}
                size={40}
                className="h-full"
            />
        );
    }

    return (
        <FlatList
            data={posts}
            renderItem={({ item }) => <Post data={item} />}
            keyExtractor={({ id }, index) => index.toString()}
            ItemSeparatorComponent={() => <View className="h-3" />}
            contentContainerStyle={{
                paddingHorizontal: 10,
                paddingVertical: 20,
            }}
        />
    );
}
