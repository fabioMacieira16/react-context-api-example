import { useState, createContext } from "react";

const Context = createContext();

export default ContextProvider = (props) => {
    const [title, setTitle] = useState("Hello Wold");

    const handleTitleChange = () => setTitle('Yeyyy! Title Changed!🥳');

    return (
        <Context.Provider value={{
            title,
            setHeaderTitle: handleTitleChange
        }}>
            {props.children}
        </Context.Provider>
    )
}