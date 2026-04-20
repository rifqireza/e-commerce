import "./App.css";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/auth/Login";
function App() {
  const screen = "w-screen h-screen flex justify-center items-center";
  return (
    <div className={screen}>
      <Toaster />
      <Routes>
        <Route index Component={() => <Navigate to="/login" />} />
        <Route path="/login" Component={Login} />
        <Route path="*" Component={() => <>hello</>} />
      </Routes>
    </div>
  );
}

export default App;
