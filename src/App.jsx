import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCourse from './pages/courses/AddCourse';
import CourseList from './pages/courses/CourseList';
import IndexDashboard from './pages/IndexDashboard';
function App() {

  const components = [

    { path: 'courses', component: <CourseList /> },
    { path: 'addcourse', component: <AddCourse /> },

  ];

  return (

    <BrowserRouter>

      {/* <AuthProvider> */}

      <Routes>

        <Route path="*" element={<IndexDashboard />}>

          {
            components.map(component => <Route key={component.path} path={component.path} element={component.component} />)
          }

        </Route>

      </Routes>

      {/* </AuthProvider> */}

    </BrowserRouter>

  );
}

export default App;
