import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import SearchResult from "./Components/SearchResult";
import VideoDetails from "./Components/VideoDetails";
import { AppContext } from "./context/contextApi"; // Import the AppContext you defined

function App() {
  return (
    <AppContext> {/* Wrap your main component with the AppContext */}
      <BrowserRouter>
        <div className="flex flex-col h-full">
         <Header/>
         <Routes>
         <Route path="/" element={<Feed/>} />
         <Route path="/searchResult/:serchQuery" element={<SearchResult/>} />
         <Route path="/video/:id" element={<VideoDetails/>} />
         </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
