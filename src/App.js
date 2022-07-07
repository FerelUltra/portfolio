import './App.css';
import {Header} from "./Header";
import {Skills} from "./Skills"
import {Education} from "./Education";
import {Experience} from "./Experience";

function App() {
    return (
        <div className="App">
            <Header/>
            <Skills/>
            <Education/>
            <Experience/>
        </div>
    );
}

export default App;
