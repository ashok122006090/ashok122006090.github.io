import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';
import AddDoctors from './components/Doctor/AddDoctors';
import UpdateDoctor from './components/Doctor/UpdateDoctor';
import DeleteDoctor from './components/Doctor/DeleteDoctor';
import GetDoctor from './components/Doctor/GetDoctor';
import FirstPage from './components/FirstPage';


function App() {
  return (
    // <div>
    //    <Router>
    //     <Header title="React  Application"
    //       description="This project is React Single Page Application (SPA). This app will consume REST endpoints using axios module.
    //     This project will have several component based on user interaction the appropriate component will call and that setting is defined in App.js in the form of Router.
    //     Router will have sevral Route defined, one Route for one component.
    //     "/>
    //   <Link to={`/doctors`}>Doctor</Link><br>
      
    //   </br>
      
    //      <Routes>
    //       {/* <Route exact path="/" component={ShowEmployee} /> */}
    //       <Route exact path='/doctors/getDoctors' element={<GetDoctor/>} />
    //       <Route exact path='/doctors/addDoctors' element={<AddDoctors/>} />
    //       <Route exact path='/doctors/updateDoctors/:doctorId' element={<UpdateDoctor/>} />
    //       <Route exact path='/doctors/deleteDoctorsById/:doctorId' element={<DeleteDoctor/>} />
    //      </Routes>
    //   </Router>
    // </div>
    <div className="App">
    <FirstPage> </FirstPage>
  </div>
  );
}

export default App;
