import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import MyProjects from "../components/paginas/MyProjects";
import Story from "../components/paginas/Story";
import Settings from "../components/paginas/Settings";
import MyProjectsDetails from "../components/paginas/MyProjectsDetails";
import EpicDetails from "../components/paginas/EpicDetails";
import StoryDetails from "../components/paginas/StoryDetails";

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
        path: "/my-projects",
        element: <MyProjects/>
    },
    {
        path: "/my-projects/:projectId",
        element: <MyProjectsDetails/>
    },
    {
        path: "/my-projects/:projectId/epic/:epicId",
        element: <EpicDetails/>
    },
    {
        path: "/my-projects/epic/story",
        element: <Story/>
    },
    {
        path: "/my-projects/:projectId/epic/:epicId/story/:storyId",
        element: <StoryDetails/>
    },
    {
        path: "/Settings",
        element: <Settings/>
    }
])