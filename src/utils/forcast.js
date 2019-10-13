const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    
    const url = "https://api.darksky.net/forecast/f1fa791a27e0b52bac064cb41b98ec90/"+latitude+","+longitude+""    
    request({url, json : true},(error, {body}) => {
        
        if(error){
            callback('Unable to connect Location services', undefined)
        }else if(body.error){
            callback('Unable to find Location. Try another seacrh', undefined)
        }
        else{
            callback(undefined, body.daily.data[0].summary+" It is currently "+body.currently.temperature+" degrees out. There is a "+body.currently.precipProbability+"% chance of rain")
    
        }

    })

}

module.exports = forecast