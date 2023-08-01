import React from "react";
import  './HeaderWithSmallLogo.css';



const Header = (props) => {

    const classes2 = 'HeaderAndLogo ' + props.className;
    return (


<div className={classes2}>



<div className="SmallLogo">
    

    <div className="circle_red"/>
    <div className="circle_red"/>
    <div className="circle_red"/>

</div>
 <h1
 className='Main_Header_Section' >
 {props.children}

 </h1>

</div>






    )


};
export default Header;