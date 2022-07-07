import './App.css';
import {Header} from "./Header";
import {Skills} from "./Skills"
import {Education} from "./Education";
import {Experience} from "./Experience";
import {Projects} from "./Projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Skills/>
            <Education/>
            <Experience/>
            <Projects/>
        </div>
    );
}

export default App;
