import { createContext, useState } from "react";

/*
we creatad a context for the watchlist.
Using context we created a provider for the watchlist.
Provider - 1. some data can be passed to the provider and all the nested children will be able to access the data.
2. why we are writing {children} in the provider? because we want to render as it is however it is extra we are passing the data to the provider..
*/


export const WatchListContext = createContext();

const WatchListProvider = ({children}) => {
    const [watchList, setWatchList] = useState([]);
   return (
        <WatchListContext.Provider value={{watchList, setWatchList}}>
            {children}
        </WatchListContext.Provider>
   );
}

export default WatchListProvider;