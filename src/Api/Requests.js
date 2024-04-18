// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const apiURL = "https://reqres.in/api/users?page=2"
// export const Requests = () => {
//     const [state , setState] = useState()

//     useEffect(() => {
//         axios
//             .get(apiURL).then((res) => {
//                 console.log(res.data.data);
//                 setState(res.data.data)
//         })
//     }, [])

//     return (
//         <div >
//             {state?.map((e) => {
//                 return(
//                     <div className='users' key={e.id}>
//                         <h2>{e.first_name} {e.last_name}</h2>
//                         <img src={e.avatar}></img>
//                         <p>{e.email}</p>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }



