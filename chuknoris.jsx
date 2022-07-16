

// var request= new XMLHttpRequest();

// var btn=document.querySelector("button");


// function clickHandler(){
//     request.open("GET", "https://api.chucknorris.io/");
//     request.send();
//     request.onload = function(){
//         if (request.status >= 200 && request.status < 400){
//             createshowText(JSON.parse(request.responseText));
//         }
//         console.log(JSON.parse(request.responseText))
//     };
    
// }

// function createshowText(obj){
//     main.append(showText);
// }
// btn.addEventListener("click", clickHandler)


var request = new XMLHttpRequest()
var opcija = document.querySelector('select')
var btn = document.querySelector('button')
var div = document.querySelector('.text')
var dropdown = []
var p = document.createElement('p')
btn.addEventListener('click', getuj)
window.addEventListener('load', lista)
function lista(){
    request.open('GET', 'https://api.chucknorris.io/jokes/categories')
    request.send()
    request.onload = function(){
        if(request.status === 200){
            var n = JSON.parse(request.responseText)
            for(var i = 0; i < n.length; i++){
                dropdown.push(n[i])
                var option = document.createElement('option')
                option.innerHTML = dropdown[i]
                option.value = dropdown[i]
                opcija.add(option)
                opcija.append(option)
            }
        }
    }
}
function getuj(){
    request.open('GET', `https://api.chucknorris.io/jokes/random?category=${opcija.value}`);
    request.send()
    request.onload = function (){
        if(request.status >= 200 && request.status < 400){
           var stagod =  JSON.parse(request.responseText)
        //    console.log(stagod.value);
           p.innerHTML = stagod.value
           div.append(p)
    }
}
}


