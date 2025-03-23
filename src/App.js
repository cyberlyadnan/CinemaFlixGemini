import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import LoginSignUp from "./components/LoginSignUp";
import Browse from "./components/Browse";
import ErrorPage from "./components/ErrorPage";
import Stream from "./components/Stream";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <LoginSignUp />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/stream/:vidId", // Updated to dynamic route
      element: <Stream />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
