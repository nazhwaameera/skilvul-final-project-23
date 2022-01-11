import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Dashboard1 from "./page/peserta/dashboard";
import Profile from "./page/peserta/profile";
import A_Dashboard from "./page/admin/dashboard";
import M_Dashboard from "./page/mentor/dashboard";
import M_detail from "./page/mentor/detail-pekerjaan";
import Data_M from "./page/admin/data_mentor";
import Data_P from "./page/admin/data_peserta";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard1/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Admin" element={<A_Dashboard/>} />
        <Route path="/Mentor" element={<M_Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
