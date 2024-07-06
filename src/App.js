import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import LoginSignUp from "./components/LoginSignUp";
import Browse from "./components/Browse";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <h1>Error To Load</h1>,
    },
    {
      path: "/login",
      element: <LoginSignUp />,
      errorElement: <h1>Error To Load</h1>,
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <h1>Error To Load</h1>,
    },
  ]);


  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
