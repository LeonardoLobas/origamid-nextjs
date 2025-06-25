import axios from "axios";
import { IProdutos } from "../page";

export async function serverGet(): Promise<IProdutos[]> {
    try {
        const response = await axios.get<IProdutos[]>(
            "https://api.origamid.online/produtos"
        );
        return response.data;
    } catch (error) {
        throw new Error(String(error));
    }
}
