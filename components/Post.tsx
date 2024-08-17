import { Text, View } from "react-native";
import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";
import Member, { MemberData } from "./Member";

export interface PostData {
    id: number;
    content: string;
    author: MemberData;
    createdAt: string;
}

export default function Post({
    data: { author, content, createdAt, id },
}: {
    data: PostData;
}) {
    return (
        <View className="w-full bg-white rounded-lg p-3">
            <View className="flex-row items-center" style={{ gap: 6 }}>
                <Member pressable data={author} />
                <Text>•</Text>
                <Text>
                    {formatRelative(createdAt, Date.now(), {
                        locale: ptBR,
                    })}
                </Text>
            </View>
            <Text className="mt-2">{content}</Text>
        </View>
    );
}
