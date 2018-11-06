class Helper{
    
    static baseurl() {
         
        return  "https://api.foursquare.com/v2"
    
    }
static auth(){
    
    const keys =[
        
        'client_id':"4G34CKFITGK1WSHHMQ52VHR3BQ2M4NCAS4AIHPIAO32DCXUU",
        'client_secret':"5AHREEYCO2KAFXFFW0FR5GSA3X0LOEC3E1CPGEGOZAJ2NA0T",
        'v':"20181105"
    ];
    
    return Object.keys(keys).map(key=>`$key={$keys(key)}`).join("&");
}

static headers(){
    
    return {
        Accept: "applicatoin/json"
    };
}

    static simpleFetch(endpoint,method,urlparams)
    {
        
        
    }
}