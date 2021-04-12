import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../module";
import { useEffect } from "react";
import { readCount, pageList, pageListAll, cleanPageList } from "../module/pageList";

export function usePageCount() {
    const { posts, postAll,  data, error, loading } = useSelector((state: RootState) => state.pageList);
    const dispatch = useDispatch()

    const setPages = (posts : any) => {
        dispatch(readCount(posts))
        dispatch(cleanPageList()) 
    }

    useEffect(()=>{
        if (data){
            dispatch(pageListAll(data))
        }
        return () => {
            dispatch(cleanPageList()) 
        }
    }, [data])


    return { posts, postAll, data, error, loading, setPages };
}