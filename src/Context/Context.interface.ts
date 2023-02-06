import { type } from "os"
import { ReactNode } from "react";

interface IValues{
    post: IPost[];
    getPost([]): void;
}
interface IPost{
    userId: number,
    id: number,
    title: string,
    body: string
}

interface IProps{
    children: ReactNode;
}
 export type{
    IValues,
    IPost,
    IProps
 }