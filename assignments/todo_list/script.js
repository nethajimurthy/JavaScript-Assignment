let sbutton= document.querySelector("#subbutton");
let todos= document.querySelector(".todos");

function createtodo(text,key,status){
    let todolist=document.createElement("ul");
    todolist.setAttribute("class","todolist");
    let userid=document.createElement('p');
    userid.setAttribute("id",'id');
    userid.append("ID NO" +key);
    let val=document.createTextNode(text);
    let result=document.createElement('div');
    result.setAttribute("id",'box');
    result.append(status=="true"? 'completed':'Failed');
    todolist.append(userid);
    todolist.append(result);
    todolist.append(val);
    
    todos.appendChild(todolist);

    todolist.setAttribute("style","border: 3px solid;border-color: skyblue;border-radius: 9px;background: gainsboro;padding-top: 7px;font-size: 22px;width: 486px;display:block;padding-left:0px;box-shadow:4px 5px darkslateblue");

    userid.setAttribute('style',"background-color: darkorange;border-radius: 25px;padding-bottom: 3px;width: 100px;margin-top: -4px;text-align: center;float: left;margin-right:10px;");
    
    status=="true"? result.setAttribute('style',"background-color: forestgreen;border-radius: 25px;padding-bottom: 3px;width: 100px;margin-top: -4px;text-align: center;float: right;margin-bottom:inherit;"):result.setAttribute('style',"background-color: red;border-radius: 25px;padding-bottom: 3px;width: 100px;margin-top: -4px;text-align: center;float: right;margin-bottom:inherit;");
}

document.querySelector("body").setAttribute("style",
"display: block;text-align: center;padding: 43px;margin: 31px;background-color: cadetblue;");
sbutton.setAttribute("style","font-family: serif;color: unset;background: cornflowerblue;border-radius: 12px;");
todos.setAttribute("style","text-align: center;padding: 26px;width: 500px;display: block;margin: auto;");
document.getElementById('status').setAttribute('style',"width: 180px;height: 25px;border-radius: 12px;background-color: royalblue");


fetch('https://jsonplaceholder.typicode.com/todos')
.then(data=> data.json())
.then(completedata=> {
    sbutton.onclick=(e=> {
        todos.innerHTML='';
        let status=document.getElementById("status");
        completedata.map((x)=> { 
            if(status.value==x.completed.toString()){                    
                createtodo(x.title,x.id,status.value)
            }
        })
    })
})
