import './App.css';
import Main from "./components/Main";
import WelcomePage from "./components/WelcomePage";
import {useSelector} from "react-redux";

const App = () => {
    const {welcomeState} = useSelector(state => state.welcomeMainR);

    return welcomeState ? <WelcomePage/> : <Main/>;
};

export default App;