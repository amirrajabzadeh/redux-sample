import "./App.css";
import DownBox1 from "./components/downBox/DownBox1";
import UpBox1 from "./components/upBox/UpBox1";

function App() {
      return (
            <div className="container">
                  <div className="font-bold text-2xl">Home</div>
                  <br />
                  <UpBox1 />
                  <br />
                  <DownBox1 />
            </div>
      );
}

export default App;
