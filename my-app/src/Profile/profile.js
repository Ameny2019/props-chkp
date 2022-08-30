import Image from "./Image.js";
import Aw from '../Assets/Aw.jpg';
import Alert from 'react-bootstrap/Alert';

function Profile(props) {

function handleName(name) {
  return (
    <Alert variant='info'>
     logged in as {name}
  </Alert>
  );
}

  
Profile.defaultProps={
  fullName: "No name",
  bio: "No bio "  ,
  profession: "no profession",

};

    return (

      <>
    <div>{handleName(props.fullName)}</div>
        <h2>{props.fullName}</h2>
        <h2>{props.bio}</h2>
        <h2>{props.profession}</h2>
        <Image  src={Aw} alt="my photo"></Image>
        
      </>
    );
  }




  
  export default Profile;
