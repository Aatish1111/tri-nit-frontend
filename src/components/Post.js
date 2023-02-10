import { useState } from "react";
import ReactDOM from "react-dom/client";

// class Post extends Component {
//     state = {
//         disease: '',
//         patientname: '',
//         doctorname: '',
//         medicinedosage: '',
//         postSubmitted: false
//     }

//     onChange = input => e => {
//         this.setState({
//             [input]: e.target.value
//         });
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(e.target[0].value)
//     }

//     render(){
//         return(
//             <>
//                 {  !this.state.postSubmitted ?
//                     (<div className="container">
//                         <form className="form-horizontal" method="post">
//                             <legend className="header">Add Post</legend>
//                             <div className="form-group">
//                                 <input onChange={this.onChange('disease')} name="disease" type="text" placeholder="Disease-Detected" className="form-control" value={this.state.disease} />
//                             </div>
//                             <div className="form-group">
//                                 <input onChange={this.onChange('patientname')} name="patientname" type="text" placeholder="Patientname" className="form-control" value={this.state.patientname}/>
//                             </div>
//                             <div className="form-group">
//                                 <input onChange={this.onChange('doctorname')} name="doctorname" type="text" placeholder="Doctorname" className="form-control" value={this.state.doctorname} />
//                             </div>
//                             <div className="form-group">
//                                 <textarea onChange={this.onChange('medicinedosage')} className="form-control" name="medicinedosage" placeholder="Enter the medicine dosage" rows="7" value={this.state.medicinedosage}></textarea>
//                             </div>
//                             <div className="form-group">
//                                 <button type="button" onClick={this.handleSubmit} className="btn btn-primary btn-lg">Submit</button>
//                             </div>
//                         </form>
//                     </div>) : (
//                         {/* <PDF title={this.state.title} content={this.state.content} image={this.state.image} /> */}
//                     )
//                 }
//             </>
//         );
//     }
// }

function Post() {
  const [disease, setDisease] = useState("");
  const [patientname, setPatientname] = useState("");
  const [doctorname, setDoctorname] = useState("");
  const [medicinedosage, setMedicinedosage] = useState("");
//   const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter the disease:
        <input
          type="text"
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Enter Patients name:
        <input
          type="text"
          value={patientname}
          onChange={(e) => setPatientname(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Enter Doctors name:
        <input
          type="text"
          value={doctorname}
          onChange={(e) => setDoctorname(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Enter medicine dosage:
        <input
          type="text"
          value={medicinedosage}
          onChange={(e) => setMedicinedosage(e.target.value)}
        />
      </label>
      <br/>
      <input type="submit" />
    </form>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Post />);

export default Post;
