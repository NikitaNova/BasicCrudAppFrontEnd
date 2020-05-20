import React, { useState } from "react"
import Back from "../icons/Back.svg"
import Settings from "../icons/Settings.svg"


const pageHeight = window.innerHeight;

function AccountPage(){
     let firstName = useState("")
     let lastName = useState("")
     let bio = useState("")



     return(
          <div className="pageContainer" style={{height:pageHeight}}>
               <header>
                    <img src={Back} alt="Go Back Icon" />
                    <div className="profilePic">
                    </div>
               </header>
               <main>
                    <section className="infoDisplay">
                         <img  src={Settings} alt="Settings" />
                         <h4>First, Last</h4>
                    </section>
                    <section className="bioPage">
                         <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                              Nam maxime iure sed! Optio eligendi libero numquam rem accusantium 
                              quod adipisci ullam totam asperiores. Ducimus ullam itaque nostrum.
                         </p>
                    </section>
               </main>
          </div>
     )
}

export default AccountPage