import React, {createContext, useContext, useState} from 'react';

const ResultsListContext = createContext();

export function ResultsListProvider({ children }) {
    const [times, setTimes] = useState([]);

    // add new component

    const AddTime = new_time => {
        setTimes(prevTimes => [...prevTimes, new_time]);
    };

    return (
        <ResultsListContext.Provider value={{times, AddTime}}>
            {children}
        </ResultsListContext.Provider>
    );
}

// export as a Hook
export function useResultsList(){
    return useContext(ResultsListContext)
}