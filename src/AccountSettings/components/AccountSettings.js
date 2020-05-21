import React, { useState } from "react"
import Back from  "../icons/Back.svg"

const contentHeight = window.innerHeight
function AccountSettings(){
     let image = null

     let [firstName, setFirstName ] = useState('')
     let [lastName, setLastName] = useState('')
     let [username, setUsername] = useState('')

     let [oldPassword, setOldPassword] = useState('')
     let [newPassword, setNewPassword] = useState('')
     let [reNewPassword, setReNewPassword] = useState('')

     let [bio, setBio]  =  useState('')

     const handleChange = e  => {
          const {name, value} = e.target

          if(name == 'firstName'){
               setFirstName(value)
               console.log(value)
          } else if(name == 'lastName'){
               setLastName(value)
               console.log(lastName)
          } else if(name == 'username'){
               setUsername(value)
               console.log(username)
          } else if(name == 'oldPassword'){
               setOldPassword(value)
               console.log(oldPassword)
          } else if(name == 'newPassword'){
               setNewPassword(value)
               console.log(newPassword)
          } else if(name == 'reNewPassword'){
               setReNewPassword(value)
               console.log(reNewPassword)
          } else if(name == 'bio'){
               setBio(value)
               console.log(bio)
          } else {
               console.log("There is no matching input to where you are typing")
          }
          
     }

     const handleSubmit = (e) => {
          e.preventDefault()
          console.log(firstName  + " " + 
          lastName + " " +  
          username + " " + 
          oldPassword + " " + 
          newPassword +  " " + 
          reNewPassword + " " + 
          bio)
     }

     const handleDeleteAcc = (e) => {
          e.preventDefault()
          console.log("Your Account Was Deleted!")
     }

     return(
          <div className="pageContainer" style={{height:contentHeight}}>
               <aside>
                    <div className="profilePhoto">
                         <img style={{display:(image == null?"none":"block")}} src="" alt="Profile Photo"/>
                    </div>
                    <hr/>
                    <h1>Info</h1>
                    <div className="backIcon">
                         <img src={Back} alt="Back Icon" />
                    </div>
               </aside>
               <main>
                    <form className="changeInfo" onSubmit={handleSubmit}>
                         <label>
                              <h1>Basics</h1>
                              <input type="text" name="firstName" placeholder="first name" onChange={handleChange}/>
                              <input type="text" name="lastName" placeholder="last name" onChange={handleChange}/>
                              <br/>
                              <input type="text" name="username" placeholder="username" onChange={handleChange}/>
                              <button>Change</button>
                         </label>
                    </form>
                    <form className="changePassword" >
                         <label>
                              <h1>New Password</h1>
                              <input type="text" name="oldPassword" placeholder="old-password" onChange={handleChange} />
                              <br/>
                              <input type="text" name="newPassword" placeholder="new-password" onChange={handleChange} />
                              <input type="text" name="reNewPassword" placeholder="re-new-password" onChange={handleChange} />
                              <button>Change</button>
                         </label>
                    </form>
                    <form className="changeBio">
                         <label>
                              <h1>Bio</h1>
                              <textarea placeholder="Say something nice..." onChange={handleChange}>
                              </textarea>
                              <button>Change</button>
                         </label>
                    </form>
                    <div className="deleteAcc">
                    <button onClick={handleDeleteAcc}>
                         Delete Account
                    </button>
                    </div>
               </main>
          </div>
     )
}

export default AccountSettings