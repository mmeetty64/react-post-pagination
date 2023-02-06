import { useEffect } from "react"

export const useAsyncEffect = (callback: () => Promise<void>, params: Array<any>) => {
    return useEffect(() => {
        (async () => {
            await callback();
        })()
    }, params);
}