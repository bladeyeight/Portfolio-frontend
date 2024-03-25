import { useState, useEffect } from "react";

function About(props) {
 return (
   <div>
     <h1>About Me</h1>
     <p>Sam Perry is a Washington DC based Software Engineer who has been working as a TEKSystems contractor for United Health Group and Optum after graduating from the College of William and Mary in 2013 and General Assembly in 2021.  Dedicated to leveraging skills in communication and full-stack development to connect people to solutions, whether they be coworkers or customers.</p>
     <h1>Certifications</h1>
     <iframe
        src = "https://drive.google.com/file/d/1M9gXfGKtspJ6RxyAdSIPQlpzi6Dc1arD/preview" height = "500px" width = "80%">
     </iframe>
     <iframe
        src = "https://drive.google.com/file/d/1mhTI4bvkiw0JfRkaaQgfbrUg_Qd9LWtO/preview" height = "500px" width = "80%">
     </iframe>
   </div>
 )
}

export default About;