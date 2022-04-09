import './App.css';
import ContextProvider from './components/ContextProvider';
import HeaderContainer from './components/HeaderContainer';

const App = () => {
  return (
    <ContextProvider>
      <HeaderContainer />
    </ContextProvider>
  );
}

export default App;
