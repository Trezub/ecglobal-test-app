import { Member } from "./Member.type";

export interface Post {
    id: number;
    content: string;
    createdAt: string;
    author: Member;
}
