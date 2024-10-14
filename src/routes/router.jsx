import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import MyProjects from "../components/paginas/MyProjects";
import Story from "../components/paginas/Story";
import Settings from "../components/paginas/Settings";
import MyProjectsDetails from "../components/paginas/MyProjectsDetails";
import EpicDetails from "../components/paginas/EpicDetails";
import StoryDetails from "../components/paginas/StoryDetails";
import Login from "../components/paginas/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/home",
        element: <Main />
    },
    {
        path: "/projects",
        element: <MyProjects/>
    },
    {
        path: "/projects/:projectId/epics",
        element: <MyProjectsDetails/>
    },
    {
        path: "/epics/:epicId/stories",
        element: <EpicDetails/>
    },
    {
        path: "/stories/",
        element: <Story/>
    },
    {
        path: "/stories/:storyId/tasks",
        element: <StoryDetails/>
    },
    {
        path: "/Settings",
        element: <Settings/>
    },
    {
        path: "/login",
        element: <Login/>
    }
])