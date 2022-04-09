import { createContext } from 'react';

const Context = createContext();

export default HeaderTitle = () => {
    return (
        <Context.Consumer>
            {(context) => (<p>{context.title}</p>)}
        </Context.Consumer>
    )
}