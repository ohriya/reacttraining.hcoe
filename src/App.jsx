import { Link,Outlet,Route, Routes } from "react-router-dom";
import Game from "./components/Game";

export default function App() {
  
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/game">Game</Link></li>
        </ul>
      </nav>
      <Routes> 
          <Route path ="/" element ={<Home/>}>
            <Route path="/posts" element={<Post/>}/>
            <Route path ="/game" element={<Game/>} />   

          </Route>
         
      </Routes>
    </div>
  );
}

function Home(){

return(
  <>
    <div>Header</div>
    <div>side bar</div>
    <Outlet/>
    <div>Footer</div>
   </>
  

);
}

function Post()
{
return(
  <div>my posts</div>
);
}

