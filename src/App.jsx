import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import AdminDashboard1 from "./pages/AdminDashboard1";
import ProjectForm from "./pages/Project-form";
import StudentDashboard from "./pages/StudentDashboard";
import Admin from "./pages/Admin";
import EditForm from "./pages/EditForm";
import Profile from "./pages/Profile"
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/admin-dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/edit/:projectId" element={<EditForm />} />
      <Route path="/Project-form" element={<ProjectForm />} />
      <Route path="/student-dashboard" element={<StudentDashboard/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/" element={<Admin/>}/>
    </Routes>
  );
}
export default App;
