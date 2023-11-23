import { BrowserRouter } from "react-router-dom";

import {Sidebar, Mainbar, EventDetail} from './components'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="w-screen h-fit bg-[#050816] " >
        <div className="flex items-center justify-center">

          <Sidebar />
          <Mainbar />

        </div>

      </div>
      <div className="w-screen h-[52rem] bg-[#050816] flex items-center" >
        

          <EventDetail/>

      </div>

    

    </BrowserRouter>
    </>
  );
};

export default App;

