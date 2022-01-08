import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard1 from "./page/peserta/dashboard";
import Profile from "./page/peserta/profile";
import A_Dashboard from "./page/admin/dashboard";
import M_Dashboard from "./page/mentor/dashboard";
import M_detail from "./page/mentor/detail-pekerjaan";
import Data_M from "./page/admin/data_mentor";
import Data_P from "./page/admin/data_peserta";

function App() {
  return (
    <div className="App">
      {/* <Dashboard1/> */}
      {/* <Profile/> */}
      {/* <A_Dashboard/> */}
      {/* <M_Dashboard/> */}
      {/* <M_detail/>  */}
      {/* <Data_M/> */}
      <Data_P/>
    </div>
  );
}

export default App;
