import HomePage from "../pages/HomePage";
import ListEmployee from "../pages/ListEmployee";
import EditProject from "../pages/EditProject";
import CreateProject from "../pages/CreateProject";
export const routes = [

    {path: "/", element: HomePage, title:"List of Projects"},
    {path: "/departments/:id/employees", element: ListEmployee, title:"List of Employees"},
    {path: "/projects/edit/:id", element: EditProject, title:"Edit Project"},
    {path: "/projects/add", element: CreateProject, title:"Add a new Project"}
]