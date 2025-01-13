// import logo from "./logo.svg";
import "./App.css";
// import "../public/css/main.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layouts/Layout";
import Acceuil from "./pages/Acceuil";
import About from "./pages/About";
import Team from "./pages/Team";
import Engagements from "./pages/Engagements";
import Enjeux from "./pages/Enjeux";
import ADN from "./pages/ADN";
import Visions from "./pages/Visions";
import Missions from "./pages/Missions";
import Valeurs from "./pages/Valeurs";
import Services from "./pages/Services";
import Projects from "./pages/Projects/Projects";
import ProjectCorreIALLM from "./pages/Projects/detailProjects/ProjectCorreIALLM";
import ProjectGilui from "./pages/Projects/detailProjects/ProjectGilui";
import Contact from "./pages/Contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Acceuil />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "team",
        element: <Team />,
      },
     
      {
        path: "Engagement",
        element: <Engagements />,
      },
      {
        path: "enjeux",
        element: <Enjeux />,
      },
      {
        path:'ADN',
        element: <ADN />,
      },
      {
        path:'vision',
        element: <Visions />,
      },
      {
        path:'mission',
        element: <Missions />,
      }
      ,
      {
        path:'valeur',
        element: <Valeurs />,
      }
      ,
      {
        path:'services',
        element: <Services/>,
      }
      ,
      {
        path:'projets',
        element: <Projects/>,
      },
      {
        path:'correIa_LLM',
        element: <ProjectCorreIALLM/>,
      }, {
        path:'gilui',
        element: <ProjectGilui/>,
      }
      , {
        path:'contact',
        element: <Contact/>,
      }
      // {
      //   path: "contact",
      //   element: <Contact />,
      // },
      // {
      //   path: "dashboard",
      //   element: <Dashboard />,
      // },

      // {
      //   path: "admin",
      //   element: <AdminDashboard />,
      // },
      // {
      //   path: "profile",
      //   element: <Profile />,
      // },
      // {
      //   path: "order",
      //   element: <Order />,
      // },
      // {
      //   path: "pondeuse",
      //   element: <Poulet />,
      // },
      // {
      //   path: "poulailler",
      //   element: <Poulailler />,
      // },
      // {
      //   path: "mouton",
      //   element: <Mouton />,
      // },
      // {
      //   path: "inventory",
      //   element: <Inventory />,
      // },
      // {
      //   path: "*", 
      //   element: <NotFound/>, 
      // }
    ],
    future: {
      v7_partialHydration: true,
    },
    
  },
  // {
  //   path: "/",
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },

  //     {
  //       path: "sign_up",
  //       element: <SignUp />,
  //     },

  //     {
  //       path: "email_reset",
  //       element: <EmailReset />,
  //     },
  //     {
  //       path: "password_reset",
  //       element: <PasswordReset />,
  //     },
  //   ],
  // },
]);
function App() {
  return (
    <div className="App">

    <RouterProvider router={router} />
</div>
    
    
  );
}

export default App;
