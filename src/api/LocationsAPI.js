
const api = "https://api.foursquare.com/v2"



let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'client_id':"4G34CKFITGK1WSHHMQ52VHR3BQ2M4NCAS4AIHPIAO32DCXUU",
        'client_secret':"5AHREEYCO2KAFXFFW0FR5GSA3X0LOEC3E1CPGEGOZAJ2NA0T",
        'v':"20181105"
  }

export const get = (locId) =>
  fetch(`${api}/books/${locId}`, { headers })
    .then(res => res.json())
    .then(data => data.location)




