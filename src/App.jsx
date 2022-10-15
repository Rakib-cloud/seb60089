import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCourse from "./pages/courses/AddCourse";
import CourseList from "./pages/courses/CourseList";
import IndexDashboard from "./pages/IndexDashboard";
import AddUserAccess from "./pages/users/AddUserAccess";
import UserList from "./pages/users/UserList";
function App() {
  const components = [
    { path: "courses", component: <CourseList /> },
    { path: "users", component: <UserList /> },
    { path: "addcourse", component: <AddCourse /> },
    { path: "adduser", component: <AddUserAccess /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<IndexDashboard />}>
          <Route index element={<CourseList />} />
          {components.map((component) => (
            <Route
              key={component.path}
              path={component.path}
              element={component.component}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
