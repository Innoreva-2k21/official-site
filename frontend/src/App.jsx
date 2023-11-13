import { BrowserRouter } from "react-router-dom";

import {Sidebar, Mainbar} from './components'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="w-screen h-screen bg-[#050816]" >
        <div className="flex mx-2">

          <Sidebar />
          <Mainbar />

        </div>

      </div>
    </BrowserRouter>
    </>
  );
};

export default App;

