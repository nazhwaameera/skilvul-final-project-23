import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard1 from "./page/peserta/dashboard";
import Profile from "./page/peserta/profile";
import A_Dashboard from "./page/admin/dashboard";
import M_Dashboard from "./page/mentor/dashboard";
import M_detail from "./page/mentor/detail-pekerjaan";
import Data_M from "./page/admin/data_mentor";
import Data_P from "./page/admin/data_peserta";
import Onboarding from "./Onboarding";
import Maps from "./page/peserta/Maps";
import Feedbacks from "./page/peserta/Feedbacks";
import LoginAdmin from "./page/admin/login";
import LoginMentor from "./page/mentor/login";

function App() {
  const user = localStorage.getItem("user");
  const admin = localStorage.getItem("admin");
  const mentor = localStorage.getItem("mentor");

  return (
    <div>
      {/* <Navbar1/> */}
      <Routes>
        <Route path="/" element={<Onboarding />} />

        {/* peserta */}
        {user && <Route path="/home" element={<Dashboard1 />} />}
        {user && <Route path="/Profile" element={<Profile />} />}
        {user && <Route path="/Quest" element={<Maps />} />}
        {user && <Route path="/Feedback" element={<Feedbacks />} />}
        <Route path="/home" element={<Navigate replace to="/" />} />

        {/* admin */}
        <Route path="/Admin" element={<LoginAdmin />} />
        {admin && <Route path="/Admin/dashboard" element={<A_Dashboard />} />}
        {admin && <Route path="/Data_Mentor" element={<Data_M />} />}
        {admin && <Route path="/Data_Peserta" element={<Data_P />} />}

        {/* mentor */}
        <Route path="/Mentor/login" element={<LoginMentor />} />
        {mentor && <Route path="/Mentor" element={<M_Dashboard />} />}
        {mentor && <Route path="/Detail" element={<M_detail />} />}
        <Route exact path="/dashboard/detail-penyelesaian/:id" element={<M_detail />} />
      </Routes>
    </div>
  );
}

export default App;
