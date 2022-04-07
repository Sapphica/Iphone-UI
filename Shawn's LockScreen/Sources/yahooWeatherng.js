var obj = {error:false, errorString:null};
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function convertWeatherIcon(iconString, mainIcon){

iconCount = iconString.indexOf("/i/c/a/") + 7;

iconName = iconString.substring(iconCount, iconString.length);

//if it is night then add the prefix nt_
if (isNight(obj.sunset, obj.sunrise, obj.localtime) && mainIcon == true){

iconName = "nt_" + iconName;

}

	switch (iconName)
		{
		case "chanceflurries.gif":
			return 13;                       // 13 Mostly Cloudy with Flurries
			break;
		case "chancerain.gif":
			return 9;                        // 9 showers (am/pm)
			break;
		case "chancesleet.gif":
			return 16;                       // 16 Sleet (am/pm)
			break;
		case "chancesnow.gif":
			return 13;                       // 13 Mostly Cloudy with Flurries
			break;
		case "chancetstorms.gif":
			return 11;                       // 11 Partly Sunnty with Thunder Showers
			break;
		case "clear.gif":
			return 0;                        // 0 Sunny
			break;
		case "cloudy.gif":
			return 6;                        // 6 Cloudy (am/pm)
			break;
		case "flurries.gif":
			return 13;                       // 13 Mostly Cloudy with Flurries
			break;
		case "fog.gif":
			return 8;                       // 8 Fog
			break;            
		case "hazy.gif":
			return 4;                        // 4 Hazy Sunshine
			break;
		case "mostlycloudy.gif":
			return 5;                        // 5 Mostly Cloudy
			break;
		case "mostlysunny.gif":
			return 1;                        // 1 Mostly Sunny
			break;
		case "partlycloudy.gif":                    
			return 3;                        // 3 Intermittent Clouds
			break;
		case "partlysunny.gif":
			return 2;                        //2 Partly Sunny
			break;
		case "rain.gif":
			return 12;                       // 12 Rain (am/pm)
			break;
       case "sleet.gif":
			return 16;                       // 16 Sleet (am/pm)
			break;
		case "snow.gif":
			return 14;                       // 14 Snow (am/pm)
			break;
		case "sunny.gif":
			return 0;                        // 0 Sunny
			break;
		case "tstorms.gif":                         
			return 10;                       // 10 Thunderstorms (am/pm)
			break;
		case "unknown.gif":
			return 7;                        // 7 retired
			break;
		case "nt_chanceflurries.gif":
			return 23;                       // 23 Night Mostly Cloudy with Flurries
			break;
		case "nt_chancerain.gif":
			return 21;                       // 21 Night Partly Cloudy with Showers
			break;
		case "nt_chancesleet.gif":
			return 24;                       // 24 Night Light snow
			break;
		case "nt_chancesnow.gif":
			return 24;                       // 25 Night Snow Fog
			break;
		case "nt_chancetstorms.gif":
			return 22;                       // 22 Night Partly Cloudy with Thunder Showers
			break;
		case "nt_clear.gif":
			return 17;                       //  17 Night Clear
			break;
		case "nt_cloudy.gif":
			return 19;                       // 19 Night Intermittent Clouds
			break;
		case "nt_flurries.gif":
			return 23;                       // 23 Night Mostly Cloudy with Flurries
			break;
		case "nt_fog.gif":
			return 20;                       // 20 Night Hazy
			break;  
		case "nt_hazy.gif":
			return 20;                       // 20 Night Hazy
			break;
		case "nt_mostlycloudy.gif":
			return 19;                       // 19 Night Intermittent Clouds
			break;
		case "nt_mostlysunny.gif":
			return 18;                       // 18 Night Mostly Clear
			break;
		case "nt_partlycloudy.gif":
			return 19;                       //19 Night Intermittent Clouds
			break;		
		case "nt_partlysunny.gif":
			return 18;                        // 18 Night Mostly Clear
			break;		
		case "nt_rain.gif":
			return 21;                       // 21 Night Partly Cloudy with Showers
			break;
		case "nt_sleet.gif":
			return 24;                       // 24 Night Light snow
			break;
		case "nt_snow.gif":
			return 24;                       // 25 Night Snow Fog
			break;
		case "nt_sunny.gif":
			return 17;                       //  17 Night Clear
			break;
		case "nt_tstorms.gif":
			return 22;                       // 22 Night Partly Cloudy with Thunder Showers
			break;
		case "nt_unknown.gif":
			return 7;                        // 7 Unknown
			break;
		default:
			return 7;		                 //	7 Unknown
			break;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

var MiniIcons = //Fix Up for weatherParser.js but also enables standardisation of sorts
[
["sunny", "flurries22"],     // 0 Sunny
["cloudy1", "flurries22"],     // 1 Mostly Sunny
["cloudy2", "cloudy62"],     //2 Partly Sunny
["cloudy6", "cloudy62"],     // 3 Intermittent Clouds
["hazysunshine", "hazysunshine2"],     // 4 Hazy Sunshine
["cloudy2", "cloudy62"],     // 5 Mostly Cloudy
["cloudy3", "cloudy32"],     // 6 Cloudy (am/pm)
["dunno", "dunno"],	// 7 retired
["fog", "cloudy62"],	 // 8 fog (am/pm)
["shower1", "shower12"],     // 9 showers (am/pm)
["tstorm3", "cloudy32"],     // 10 Thunderstorms (am/pm)
["tstorm1", "tstorm12"],     // 11 Partly Sunnty with Thunder Showers
["light_rain", "cloudy32"],	// 12 Rain (am/pm)
["flurries1", "cloudy62"],     // 13 Mostly Cloudy with Flurries
["snow3", "sleet2"],	 // 14 Snow (am/pm)
["snow5", "snow52"],	 // 15 Mostly Cloudy with Snow
["sleet", "sleet2"],	 // 16 Sleet (am/pm)
// Night only Icons;
["sunny_night", "cloudy1_night2"],     //  17 Night Clear
["cloudy1_night", "cloudy1_night2"],	 // 18 Night Mostly Clear
["cloudy4_night", "cloudy1_night2"],	 // 19 Night Intermittent Clouds
["cloudy6_night", "cloudy1_night2"],	 // 20 Night Hazy
["shower2_night", "shower3_night2"],	 // 21 Night Partly Cloudy with Showers
["tstorm1_night", "cloudy1_night2"],	 // 22 Night Partly Cloudy with Thunder Showers
["snow3", "cloudy1_night2"],	         // 23 Night Mostly Cloudy with Flurries
["cloudy1_nightls", "cloudy1_night2"],	 // 24 Night Light snow
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findChild (element, nodeName)
{
	var child;
	for (child = element.firstChild; child != null; child = child.nextSibling)
	{
		if (child.nodeName == nodeName)
			return child;
	}
	return null;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////


function trimWhiteSpace (string)
{
	return string.replace(/^\s*/, '').replace(/\s*$/, '');
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function constructError (string)
{
	return {error:true, errorString:string};
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// parses string of the form nn:nn
function parseTimeString(string)
{
	var obj = null;
	try {
		var array = string.match (/\d{1,2}/g);
		
		obj = {hour:parseInt(array[0], 10), minute:parseInt(array[1],10)};
	}
	catch (ex)
	{
		// ignore
	}
	
	return obj;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// parses string of the form nn:nn
function parsehour(string)
{
	var obj = null;
	try {
		var array = string.match (/\d{1,2}/g);
		
		obj = {hour:parseInt(array[0], 10)};
	}
	catch (ex)
	{
		// ignore
	}
	
	return obj;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function parseDayCode (dayCode)
{
	return trimWhiteSpace(dayCode).substr (0, 3).toUpperCase();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//This function looks at the passed sunrise and sunset variables to see if it is day or night
        function isNight(sunset, sunrise, localTime)
        {
            sunrise = sunrise.replace(/^\s+|\s+$/g, "").toUpperCase();
            sunriselen = sunrise.length;
            sunriseColPos = sunrise.search(":");
            sunriseHours = parseInt(sunrise.substring(0, sunriseColPos), 10) * 60;
            sunriseMinutes = parseInt(sunrise.substring(sunriseColPos + 1, sunriselen - sunriseColPos + 2));
            sunriseMinutes = sunriseHours + sunriseMinutes;

            sunset = sunset.replace(/^\s+|\s+$/g, "").toUpperCase();
            sunsetlen = sunset.length;
            sunsetColPos = sunset.search(":");
            sunsetHours = parseInt(sunset.substring(0, sunsetColPos), 10) * 60;
            sunsetMinutes = parseInt(sunset.substring(sunsetColPos + 1, sunsetlen - sunsetColPos + 2));
            sunsetMinutes = sunsetHours + sunsetMinutes;

            localTimeColPos = localTime.search(":");            
            currentHours = parseInt(localTime.substr(localTimeColPos-2,2));
            currentMinutes = parseInt(localTime.substr(localTimeColPos+1,2));

            localTimeAMPMString = localTime.substr(localTimeColPos+3,localTime.length);
            
            if ((localTimeAMPMString.search("PM") == 1 && currentHours != 12) || (localTimeAMPMString.search("AM") == 1 && currentHours == 12)){
            currentHours = currentHours + 12;                                                                                                                                                    
            }
            currentMinutes = (currentHours * 60) + currentMinutes            

            if (currentMinutes >= sunriseMinutes && currentMinutes < sunsetMinutes)
            {
                //set image to sun
                return false;
            }
            else
            {
                //set image to moon
                return true;
            }
        }
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
function fetchWeatherData (callback, location, metric)
{
	if (window.timerInterval != 300000)
		window.timerInterval = 300000; // 5 minutes
       
    url = 'http://api.wunderground.com/auto/wui/geo/WXCurrentObXML/index.xml?query=' + location;
    
	var xml_request = new XMLHttpRequest();
	xml_request.onload = function(e) {xml_loaded(e, xml_request, callback, metric, location);}
	xml_request.overrideMimeType("text/xml");
	xml_request.open("get", url);
	xml_request.setRequestHeader("Cache-Control", "no-cache");
	xml_request.setRequestHeader("wx", "385");
	xml_request.send(null);

	return xml_request;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function xml_loaded (event, request, callback, metric, location)
{
	if (request.responseXML)
	{
    var current_observation = findChild (request.responseXML, "current_observation");
    var display_location = findChild (current_observation, "display_location");
	var observation_location = findChild (current_observation, "observation_location");
    
    tag = findChild (observation_location, "city");
	 
    if (tag == null){
    callback({error:true, errorString:"No Valid Response"});
    } else if (tag.firstChild == null){
    callback({error:true, errorString:"Invalid Location"});   
    } else {
    var current_observation = findChild (request.responseXML, "current_observation");
    var display_location = findChild (current_observation, "display_location");
	var observation_location = findChild (current_observation, "observation_location");  
        
	tag = findChild (current_observation, "local_time");
	obj.localtime = (tag.firstChild.data);
            
	tag = findChild (display_location, "city");
	obj.city = trimWhiteSpace(tag.firstChild.data.toString());
	
	tag = findChild (observation_location, "full");
	obj.observationLocation = trimWhiteSpace(tag.firstChild.data.toString());
	
	tag = findChild (current_observation, "relative_humidity");
	obj.humidity = (tag.firstChild.data);
    
	tag = findChild (current_observation, "weather");
	obj.description = trimWhiteSpace(tag.firstChild.data);	
    
	tag = findChild (current_observation, "observation_time");
	obj.observationTime = trimWhiteSpace(tag.firstChild.data);    
	
	tag = findChild (current_observation, "wind_degrees");
	obj.windDirection = trimWhiteSpace(tag.firstChild.data);
	
	tag = findChild (current_observation, "wind_mph");
	obj.windspeed = trimWhiteSpace(tag.firstChild.data);

	tag = findChild (current_observation, "icons");
	tag = findChild (tag, "icon_set");
	tag = findChild (tag, "icon_url");
    obj.icon = (tag.firstChild.data).toLowerCase();

		
    if (metric == "false"){
    tag = findChild (current_observation, "temp_f"); 
	obj.temp = (tag.firstChild.data) + "&deg;F";
    
	tag = findChild (current_observation, "pressure_in");
	obj.pressure = trimWhiteSpace(tag.firstChild.data) + " inHg";
	  
	tag = findChild (current_observation, "dewpoint_f");
	obj.dewpoint = trimWhiteSpace(tag.firstChild.data) + "&deg;F";	

	tag = findChild (current_observation, "windchill_f");
	obj.windchill = trimWhiteSpace(tag.firstChild.data) + "&deg;F";  

	tag = findChild (current_observation, "visibility_mi");
	obj.visibility = trimWhiteSpace(tag.firstChild.data) + " miles";  
    
    }else{
    tag = findChild (current_observation, "temp_c"); 
	obj.temp = (tag.firstChild.data) + "&deg;C";
    
	tag = findChild (current_observation, "pressure_mb");
	obj.pressure = trimWhiteSpace(tag.firstChild.data) + " kPa";
	  
	tag = findChild (current_observation, "dewpoint_c");
	obj.dewpoint = trimWhiteSpace(tag.firstChild.data) + "&deg;C";

	tag = findChild (current_observation, "windchill_c");
	obj.windchill = trimWhiteSpace(tag.firstChild.data) + "&deg;C";  

	tag = findChild (current_observation, "visibility_km");
	obj.visibility = trimWhiteSpace(tag.firstChild.data) + " km"; 
   
    }
    
	url = 'http://api.wunderground.com/auto/wui/geo/ForecastXML/index.xml?query=' + location;
    
	var xml_request = new XMLHttpRequest();
	xml_request.onload = function(e) {Weather_xml_loaded(e, xml_request, callback, metric, location);}
	xml_request.overrideMimeType("text/xml");
	xml_request.open("get", url);
	xml_request.setRequestHeader("Cache-Control", "no-cache");
	xml_request.setRequestHeader("wx", "385");
	xml_request.send(null);
    }
	} 
	else
	{
		callback({error:true, errorString:"XML request failed. no responseXML"}); //Could be any number of things..
	}

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
function Weather_xml_loaded (event, request, callback, metric, location)
{
	if (request.responseXML)
	{      
    
    var forecast = findChild (request.responseXML, "forecast");
    txtforecast = findChild (forecast, "txt_forecast");
    forecastday = findChild (txtforecast, "forecastday");
	
    var moon_phase = findChild (forecast, "moon_phase");
	tag = findChild (moon_phase, "ageOfMoon");
    obj.moonPhase = (tag.firstChild.data); 
    
	var sunset = findChild (moon_phase, "sunset");
	tag = findChild (sunset, "hour");
	hour = (tag.firstChild.data);
	tag = findChild (sunset, "minute");
	minute = (tag.firstChild.data);
	
	obj.sunset = hour + ":" + minute;

	sunrise = findChild (moon_phase, "sunrise");
	tag = findChild (sunrise, "hour");
	hour = (tag.firstChild.data);
	tag = findChild (sunrise, "minute");
	minute = (tag.firstChild.data);
	
	obj.sunrise = hour + ":" + minute;
    
    obj.icon = convertWeatherIcon(obj.icon, true)	
    
    obj.forecast = new Array;
	
    var simpleforecast = findChild (forecast, "simpleforecast");	 
		
    // assume the days are in order, 1st entry is today
    var child;
    var j=0;
    var firstTime = true;
		
		for (child = simpleforecast.firstChild; child != null; child = child.nextSibling)
		{
		    if (child.nodeName == 'forecastday')
			{
				if (firstTime) // today
				{
					tag = child;
					mytag = findChild(tag, "high");
					if (metric == "false"){mytag = findChild(mytag, "fahrenheit");
					obj.hi = parseInt (mytag.firstChild.data) + "&deg;F";
					} else {
                  mytag = findChild(mytag, "celsius");
                  obj.hi = parseInt (mytag.firstChild.data) + "&deg;C";
                  }
					mytag = findChild(tag, "low");
					if (metric == "false"){mytag = findChild(mytag, "fahrenheit");
					obj.lo = parseInt (mytag.firstChild.data) + "&deg;F";
					} else {
					mytag = findChild(mytag, "celsius");
					obj.lo = parseInt (mytag.firstChild.data) + "&deg;C";
					} 
		    
					firstTime = false;
				}

				var foreobj = {daycode:null, hi:0, lo:0, icon:-1, sunrise:null, sunset:null};


					tag = findChild(child, 'date');
					tag = findChild(tag, 'weekday');
					foreobj.daycode = trimWhiteSpace(tag.firstChild.data.toString());

					mytag = findChild(child, "conditions");
					foreobj.desc = trimWhiteSpace(mytag.firstChild.data.toString());
				
					tag = child;
					mytag = findChild(tag, "high");
					if (metric == "false"){mytag = findChild(mytag, "fahrenheit");
					foreobj.hi = parseInt (mytag.firstChild.data) + "&deg;F";
					} else {
					mytag = findChild(mytag, "celsius");
					foreobj.hi = parseInt (mytag.firstChild.data) + "&deg;C";
					}		     
					     
					mytag = findChild(tag, "low");
					if (metric == "false"){
					mytag = findChild(mytag, "fahrenheit");
					foreobj.lo = parseInt (mytag.firstChild.data) + "&deg;F";	
					} else {
					mytag = findChild(mytag, "celsius");
					foreobj.lo = parseInt (mytag.firstChild.data) + "&deg;C";	
					} 
					
					mytag = findChild (child, "icons");
					mytag = findChild (mytag, "icon_set");
					mytag = findChild (mytag, "icon_url");
					foreobj.icon = convertWeatherIcon((mytag.firstChild.data).toLowerCase(), false);
					foreobj.ouricon = MiniIcons[foreobj.icon];
		
				obj.forecast[j++]=foreobj;
				if (j == 5) break; // only look ahead 5 days
			}
		}
        
        if (language == 'en'){
        
        var k=0; 
		
				var txt_forecast = findChild (forecast, "txt_forecast");
				for (child = txt_forecast.firstChild; child != null; child = child.nextSibling)
					{
					if (child.nodeName == 'forecastday')
						{	
						mytag = findChild(child, "fcttext");
						foreDesc = (mytag.firstChild.data);
                        obj.forecast[k++].desc=foreDesc;
                        if (j == 5) break; // only look ahead 5 days
						}
					}
        }
		
		
	weatherData = JSON.stringify(obj);

myDB.transaction(function (transaction)
 {
	transaction.executeSql("UPDATE files SET weatherData = ?, lastUpdated = ?",
	    [weatherData, timeNow()],
	    function (transaction, results) {callback(weatherData);},
		function (transaction, error) {});
});

		
	} 
	else
	{
		callback({error:true, errorString:"XML request failed. no responseXML"}); //Could be any number of things..
	}

}
