
import Imgpro from '../Assets/profile.png'; 


function Image(props) {
  Image.defaultProps= {src:[Imgpro] , alt:"the image is not found" }
  const styleImg={width:"100px"}
    return (
      <>
        <img style={styleImg} src={props.src} alt={props.alt}/>
        {props.children}
      </>
    );
  }
  
  export default Image;