export default function getHeaders() {
   let headers = {'Content-Type': 'application/json'}

   let user = JSON.parse(localStorage.getItem('user'))

   if(user && user.token){
      headers['Authorization'] = 'Bearer ' + user.token
   }

   return headers;
}