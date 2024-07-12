import { Typography ,Card} from '@mui/material'
import React from 'react'
import Image from "../../../public/profileimage.png";
import Timeline from "../../components/TimeLine/TimeLine"
import  './Profile.css'
const Profile = () => {
  return (
   <Card>
    <div className="profile_name">
    <Typography variant="h5" >Falgun Pal</Typography>
    <Typography variant="subtitle2"   color={"#77777B"}  >MernStack Developer</Typography>
    </div>


    <figure className="profile_image">
        <img src={Image}></img>
    </figure>

    <div>
      <Timeline></Timeline>
    </div>
   </Card> 
  )
}

export default Profile