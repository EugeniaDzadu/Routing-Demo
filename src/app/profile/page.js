import { Metadata } from "next";

export const metadata = {
    title: {
        absolute: "Profile",
    }
}

const Profile = ()=>{
    return(
        // <h1>My profile page</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fmf9Xc5IR4s?si=Ikm64xaWitllc0CC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    )
  }
  
  export default Profile;