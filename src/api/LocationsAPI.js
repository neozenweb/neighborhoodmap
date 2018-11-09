const api = "https://api.foursquare.com/v2"
/*Foursquare API for developers is used to extract the distance of the marker from the center location. The client-id, 
client-key and token 'v' are used to access the data from the API*/

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'client_id':"4G34CKFITGK1WSHHMQ52VHR3BQ2M4NCAS4AIHPIAO32DCXUU",
        'client_secret':"5AHREEYCO2KAFXFFW0FR5GSA3X0LOEC3E1CPGEGOZAJ2NA0T",
        'v':"20181105"
  };



export const getLoc =(pos)=>

fetch(`https://api.foursquare.com/v2/venues/search?ll=${pos.lat},${pos.lng}&client_id=${headers.client_id}&client_secret=${headers.client_secret}&v=${headers.v}`
      , {
    method: 'GET'
    })
    .then(response =>response.json())
    .catch(err=>err)




