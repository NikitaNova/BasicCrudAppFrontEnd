 export const initialState = {
     loading: false,
     loggedIn: false,
     isSuccessful: false,
     userData: {
         username: '',
         firstName: '',
         lastName: '',
         bio: ''
     },
     input: {
         logIn: {
             username: '',
             password: ''
         },
         signUp: {
             username: '',
             password: '',
             firstName: '',
             lastName: ''
         }
     }
 }