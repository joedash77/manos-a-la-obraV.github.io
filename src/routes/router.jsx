import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import My_Projects from "../components/paginas/My_Projects";
import Epic from "../components/paginas/Epic";
import Story from "../components/paginas/Story";
import Settings from "../components/paginas/Settings";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/my-projects",
        element: <My_Projects/>
    },
    {
        path: "/my-projects/:projectId",
        element: <My_Projects/>
    },
    {
        path: "/my-projects/epic",
        element: <Epic/>
    },
    {
        path: "/my-projects/epic/:epicId",
        element: <Epic/>
    },
    {
        path: "/my-projects/epic/story",
        element: <Story/>
    },
    {
        path: "/my-projects/:projectId/epic/:epicId/story/:storyId",
        element: <Story/>
    },
    {
        path: "/Settings",
        element: <Settings/>
    }
])