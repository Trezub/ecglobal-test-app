import axios from "axios";
import { Platform } from "react-native";

export const api = axios.create({
    baseURL:
        Platform.OS === "web"
            ? "http://localhost:3000"
            : "http://10.0.2.2:3000", // Este é o endereço local do emulador do Android. Alterar para o IP da máquina da API caso deseje rodar em um dispositivo real
});
