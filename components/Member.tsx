import { Member as MemberType } from "@/types/Member.type";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Member({
    data: { avatar, name, id },
    pressable,
}: {
    data: MemberType;
    pressable?: boolean;
}) {
    const content = (
        <>
            <Image className="h-7 w-7 rounded-full" source={{ uri: avatar }} />
            <Text>{name}</Text>
        </>
    );

    return pressable ? (
        // <Link href={{pathname: '/(tabs)/members/'}} asChild>
        <TouchableOpacity className="flex-row items-center gap-2">
            {content}
        </TouchableOpacity>
    ) : (
        // </Link>
        <View className="flex-row items-center gap-2">{content}</View>
    );
}
