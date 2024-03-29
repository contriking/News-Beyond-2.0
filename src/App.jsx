import { useState } from "react";
import Navbar from "./Components/Navbar";
import Newsboard from "./Components/Newsboard";
import Newsitem from "./Components/Newsitem";

function App(){

    const [category,setCategory]=useState("general");

    return(<>
            <Navbar setCategory={setCategory}/>
            <Newsboard category={category}/>
            <Newsitem/>
        </>
    );
}

export default App 