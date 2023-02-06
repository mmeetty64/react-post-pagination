import { createContext, FC, useState } from "react";
import { IPost, IProps, IValues } from "./Context.interface";

export const Context = createContext({} as IValues);

export const ContextWrapper: FC<IProps> = ({children}) => {
    const [post, setPost] = useState<IPost[]>([]);

    const getPost = (post: IPost[]) =>{
        setPost(post);
    }
    
    const values = {
        post,
        getPost
    }
    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}