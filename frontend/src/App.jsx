// src/App.jsx

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Dialoguebox from "./components/Dialoguebox";

import Home from "./pages/Home";
import About from "./pages/About";
import Syllabus from "./pages/Syllabus";
import Results from "./pages/Results";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";

import CseDept from "./requirements/CseDept";
import AiDept from "./requirements/AiDept";
import Deptm from "./requirements/Deptm";

import Cse2022 from "./schemes/Cse2022";
import Ai2022 from "./schemes/Ai2022";

import Csefirstsem from "./csesemester/Csefirstsem";
import Csesecondsem from "./csesemester/Csesecondsem";

import Firstsem from "./aisemesters/firstsem";
import Secondsem from "./aisemesters/Secondsem";

const AppContent = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    document.getElementsByTagName("head")[0].appendChild(meta);

    // Only prevent pinch zoom, allow normal scrolling
    const handleTouchStart = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <button
        onClick={() => navigate("/dialoguebox")}
        className="p-2 fixed z-50 top-1/2 -translate-y-1/2 right-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 block rounded-full w-10 h-10
          hover:scale-110 hover:rotate-12 
          active:scale-95
          transition-all duration-300
          animate-bounce
          hover:animate-none
          shadow-lg hover:shadow-xl
          hover:from-blue-600 hover:to-purple-700 border-white border-2"
      >
        <span className="inline-block transform transition-transform">D</span>
      </button>
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route element={<AdminRoute />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>

            <Route element={<UserRoute />}>
              {/* CSE Department Routes */}
              <Route path="/dialoguebox" element={<Dialoguebox />} />
              <Route path="/about" element={<About />} />
              <Route path="syllabus" element={<Syllabus />} />
              <Route path="/results" element={<Results />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/dept" element={<Deptm />} />
              <Route path="/cse-dept" element={<CseDept />} />
              <Route path="/cse-dept/2022-scheme" element={<Cse2022 />} />
              <Route
                path="/cse-dept/2022-scheme/semester-1"
                element={<Csefirstsem />}
              />
              <Route
                path="/cse-dept/2022-scheme/semester-2"
                element={<Csesecondsem />}
              />

              {/* AI Department Routes */}
              <Route path="/ai-dept" element={<AiDept />} />
              <Route path="/ai-dept/2022-scheme" element={<Ai2022 />} />
              <Route
                path="/ai-dept/2022-scheme/semester-1"
                element={<Firstsem />}
              />
              <Route
                path="/ai-dept/2022-scheme/semester-2"
                element={<Secondsem />}
              />
            </Route>
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
