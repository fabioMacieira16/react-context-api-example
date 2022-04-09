import { createContext } from "react"

const Context = createContext();

export default HeaderButton = () => {
    return (
        <Context.Consumer>
            {(context) => (
                <button onClick={context.setHeaderTitle}>Click me to change Title</button>
            )}
        </Context.Consumer>
    )
}