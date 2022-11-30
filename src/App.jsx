import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home, { fetch } from "./routes/Home";
import "./App.css"
import About from "./routes/About";
import NewPost, { submitPost } from "./routes/NewPost";
import Post from "./routes/post";
export default function App()
{
   const router = createBrowserRouter([{
      path: '/',
      element: <Root />,
      children: [
         {
            path: '/',
            element: <Home />,
            loader: fetch
         },
         {
            path: '/about',
            element: <About />
         },
         {
            path: '/new',
            element: <NewPost />,
            action: submitPost,
           
         },
         {
          path:'/post/:id',
          element:<Post/>,
          action: submitPost,
         }
      ]
   }
])
   return (
      <RouterProvider router={router} />
   )
}

