import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="relative z-10 w-full mx-auto sm:max-w-screen-md mt-6">
        <Slider/>
      </div>
    </div>
    
  );
}

export default App;
