import React, { useState } from "react"
import Back from  "../icons/Back.svg"

const contentHeight = window.innerHeight
function AccountSettings(){
     let image = null

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
                    <form className="changeInfo" >
                         <label>
                              <h1>Basics</h1>
                              <input type="text" name="firstName" placeholder="first name" />
                              <input type="text" name="lastName" placeholder="last name" />
                              <br/>
                              <input type="text" name="username" placeholder="username" />
                              <button>Change</button>
                         </label>
                    </form>
                    <form className="changePassword" >
                         <label>
                              <h1>New Password</h1>
                              <input type="text" name="oldPassword" placeholder="old-password" />
                              <br/>
                              <input type="text" name="newPassword" placeholder="new-password" />
                              <input type="text" name="reNewPassword" placeholder="re-new-password"/>
                              <button>Change</button>
                         </label>
                    </form>
                    <form className="changeBio">
                         <label>
                              <h1>Bio</h1>
                              <textarea placeholder="Say something nice...">
                              </textarea>
                              <button>Change</button>
                         </label>
                    </form>
                    <div className="deleteAcc">
                    <button>Delete Account</button>
                    </div>
               </main>
          </div>
     )
}

export default AccountSettings