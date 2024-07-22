const sendData = (e)=>{

 e.preventDefault();

 let name = document.querySelector('input').value;

 fetch('http://127.0.0.1:5000/', {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name:name})
 }).then(response => response.json())

.then(response =>{console.log(JSON.stringify(response))})





}

document.querySelector("button").addEventListener('click', sendData)

