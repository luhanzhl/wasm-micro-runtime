/* Copyright (C) 2019 Intel Corporation.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

function setfooterposition(divname)
//Locate footer on the right place
{
   var Top = dlist.length* $("#devices").height()+300;
   var scrollTop = $(document).scrollTop();
    if (dlist.length >=4){
        $(divname).css({posisiton:'absolute','top':Top+scrollTop});
    }
}
setfooterposition(".footer");

window.onload = function clone()
//Show the list of connected devices
{  
   var sourceNode = document.getElementById("devices");
   $("#IPs").html("IP : "+ dlist[0]['IP']);
   $("#ports").html("Port : "+ dlist[0]['Port']);
   $("#installs").html("Installed Apps : "+ dlist[0]['apps']);
   $("#devices").attr('class','devic0');
   $("#dbutton").attr('class','bt0');
   $("#choose").attr('class','chos0');
   
    for (var i=1; i<dlist.length; i++)
     {
       var cloneNode= sourceNode.cloneNode(true);
       sourceNode.parentNode.appendChild(cloneNode);
       $("#IPs").html("IP : "+ dlist[i]['IP']);
       $("#ports").html("Port : "+ dlist[i]['Port']);
       $("#installs").html("Installed Apps : "+ dlist[i]['apps']);
       $("#devices").attr('class','devic'+i);
       $("#dbutton").attr('class','bt'+i);
       $("#choose").attr('class','chos'+i);       
     }
     
};

function deviceClick(obj){
//Render to the application.html 
    var deviceObj=$(obj);
    var ip=deviceObj.find('#IPs').text();
    ip=ip.split(':')[1].split(' ')[1]
    var port=deviceObj.find('#ports').text();
    port=port.split(':')[1].split(' ')[1]
    var newurl = "apps/?"+"ip="+ip+"&port="+port;
    window.location.href= newurl;
}

