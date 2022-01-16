import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
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
// import Navbar1 from "./components/navbar";

function App() {
  return (
    <div>
      {/* <Navbar1/> */}
      <Routes>
        <Route path="/" element={<Onboarding />} />

        {/* peserta */}

        <Route path="/home" element={<Dashboard1/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Quest" element={<Maps/>} />
        <Route path="/Feedback" element={<Feedbacks/>} />


        {/* admin */}
        <Route path="/Admin" element={<A_Dashboard />} />
        <Route path="/Data_Mentor" element={<Data_M />} />
        <Route path="/Data_Peserta" element={<Data_P />} />

        {/* mentor */}
        <Route path="/Mentor" element={<M_Dashboard />} />
        <Route path="/Detail" element={<M_detail />} />

        <Route exact path="/dashboard/detail-penyelesaian/:id" element={<M_detail />} />
      </Routes>
    </div>
  );
}

export default App;
