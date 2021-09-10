import imageSrc from"./cookies.jpg"
import myVideo from "./GOMYCODE HACKS HACKATHON.mp4"
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1 class="title red">Yacine Ramdani</h1>
        <br />
        <img src={imageSrc} alt="" />
        <br />
        <img src="/husky.jfif" alt="" />
      </div>
      <video width="320" height="240" controls >
        <source src={myVideo}type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
