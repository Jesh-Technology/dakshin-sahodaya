import React from 'react'
import firebase from '../../../firebase/firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Head from 'next/head'

function RegisteredSchools() {
  const db = firebase.firestore()

const[schools]=useCollectionData(db.collection("schools"))

  return (
    <html>
    <Head>
 <meta charset="utf-8"/>
 <meta name="viewport" content="width=device-width, initial-scale=1"/>
 <title>Latest News</title>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>

 </Head>
 <body className="bg-black">
 <nav className="navbar bg-black border-bottom border-top">
 <div className="container-fluid justify-content-center px-0">
 <h1 className="navbar-brand my-0 h1 fw-bolder text-white"><b>REGISTERED SCHOOLS</b></h1>      
 </div>
 </nav>
 <div className="container-fluid justify-content-center" style={{width:'40em'}}>
    <div>{schools && schools.map(school => 
      school.approved===false?<div>
        <h2 className="my-0 h1 fw-bolder text-white my-3" align="center"><b>Waiting for approval</b></h2>
        <div className="border border-bottom pb-3 px-3">
        <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Logo of the School:-</h1> 
        <img src={school.logo} alt="logo" tyle={{width:"33.5em", height:"33.5em"}}/>
        </div>
        <div className="border border-bottom pb-3 px-3">
        <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Address of the school:-</h1>
        <p className="text-white">{school.adress}</p>
        </div>
        <div className="border border-bottom pb-3 px-3">
        <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Name of the Principal:-</h1>
        <span className="text-white">{school.principal}</span>
        </div>
        <div className="border border-bottom pb-3 px-3">
        <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Contact Number:-</h1>
      <span className="text-white">{school.contact}</span>
      </div>
      <div className="border border-bottom pb-3 px-3">
      <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Contact Number:-</h1>
      <span className="text-white">{school.schoolname}</span>
      </div>
      <div className="border border-bottom pb-3 px-3">
      <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Image of the Payment slip:-</h1>
      <img src={school.payment}alt="payment" style={{width:"36.5em", height:"50em"}}/>
      </div>
      <div className="d-grid my-3">
        <button className="btn btn-lg text-black fw-bold bg-warning border-0 py-2" type="button" onClick={async()=>{
        await db.collection("schools").doc(school.schoolname).update({"approved":true})
      }}>approve</button>
      </div>
    </div> : <div>
    <h2 className="my-0 h1 fw-bolder text-white my-3" align="center"><b>Registered</b></h2>
        <div className="border border-bottom pb-3 px-3">
        <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Logo of the School:-</h1> 
        <img src={school.logo} alt="logo" tyle={{width:"33.5em", height:"33.5em"}}/>
        </div>
        <div className="border border-bottom pb-3 px-3">
        <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Address of the school:-</h1>
        <p className="text-white">{school.adress}</p>
        </div>
        <div className="border border-bottom pb-3 px-3">
        <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Name of the Principal:-</h1>
        <span className="text-white">{school.principal}</span>
        </div>
        <div className="border border-bottom pb-3 px-3">
        <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Contact Number:-</h1>
      <span className="text-white">{school.contact}</span>
      </div>
      <div className="border border-bottom pb-3 px-3">
      <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Contact Number:-</h1>
      <span className="text-white">{school.schoolname}</span>
      </div>
      <div className="border border-bottom pb-3 px-3">
      <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Image of the Payment slip:-</h1>
      <img src={school.payment}alt="payment" style={{width:"36.5em", height:"50em"}}/>
      </div>
      <div className="d-grid my-3">
        <button className="btn btn-lg text-black fw-bold bg-danger border-0 py-2" type="button" onClick={async()=>{
        await db.collection("schools").doc(school.schoolname).delete()
      }}>Delete</button>
      </div>
    </div>




// {/* <html>
// <Head>
// <meta charset="utf-8"/>
// <meta name="viewport" content="width=device-width, initial-scale=1"/>
// <title>Latest News</title>
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>

// </Head>
// <body className="bg-black">    
// <nav className="navbar bg-black border-bottom border-top">
// <div className="container-fluid justify-content-center px-0">
// <h1 className="navbar-brand my-0 h1 fw-bolder text-white"><b>REGISTERED SCHOOLS</b></h1>      
// </div>
// </nav>
// <div className="container-fluid justify-content-center" style={{width:'20.25em'}}>
// <h1 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="center"><b>Waiting for approval</b></h1> 
// <h2 className="navbar-brand my-0 h1 fw-bolder text-white my-3" align="left">Logo of the School:-</h2> 
// <img src={school.logo} alt="logo" width="500" height="500"/>
// <form className="pb-lg-5 pt-lg-4 px-2 pb-5 pt-4">
// <div className="form-floating">
// <textarea type="text" className="form-control bg-dark text-white border-0" rows="10" placeholder="Name" onChange={(e)=>{setdetail(e.target.value)}}/>
// <label className="text-secondary fw-bold">Details of the news</label>
// </div>
// <div className="my-2">
// <label className="form-label text-white fw-bold">Image for the News</label>
// <input className="form-control" type="file" accept=".png, .jpg, .jpeg" id="formFile" onChange={(e)=>{setimg(e.target.files[0])}}/>
// </div>

// <div className="d-grid mt-3">
// <button type="button" className="btn btn-lg text-black fw-bold bg-warning border-0 py-2">Post</button>
// </div>
// </form>
// </div>

// </body>
// </html> */}
      )
        }
        {
           schools === undefined?null:
           <div className="container-fluid justify-content-center bg-black">
            <div className="position-absolute top-50 start-50 translate-middle">
            <span className="text-warning fw-bold fs-4" align="center">*No Registered Schools</span>
            </div>
          </div>
         }</div>
         </div>
         </body>
</html>
  )
}


export default RegisteredSchools