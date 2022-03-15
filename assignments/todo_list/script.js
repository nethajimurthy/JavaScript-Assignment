let textbox=document.querySelector("#input_box");
let sbutton= document.querySelector("#subbutton");
let todos= document.querySelector(".todos");
let key = 0;
sbutton.onclick=(e=> {
    if(textbox.value !== ""){
    createtodo(textbox.value,key);
    key++;
    textbox.value="";
    }
    else{
        alert("Cannot be empty box");
    }
});

function createtodo(text,key){
    let todolist=document.createElement("ul");
    todolist.setAttribute("id",key);
    let val=document.createTextNode(text);
    let del=document.createElement('button');
    del.setAttribute("class","delete_button");
    del.append("delete");
    del.setAttribute("id",key);
    todolist.append(val,del);
    todos.appendChild(todolist);
    del.onclick=((data)=>{
        todolist.remove();
    });

    todolist.setAttribute("style","height: 33px;padding-left: 35px;border: 3px solid;border-color: skyblue;border-radius: 34px;background: gainsboro;text-align:left;padding-top: 7px;font-size: 22px;width: 486px;margin-left: -20px;");

    del.setAttribute("style","height: 37px;width: 72px;display: inline;float:right;border-radius: 25px;background-color: crimson;margin-top: -6.2px;margin-right: 2px;");

}

document.querySelector("body").setAttribute("style",
"display: block;text-align: center;padding: 43px;margin: 31px;background-color: cadetblue;");
textbox.setAttribute("style","height: 24px;width: 429px;border-color: cornflowerblue;border-radius: 13px;");
sbutton.setAttribute("style","font-family: serif;color: unset;background: cornflowerblue;border-radius: 12px;");
todos.setAttribute("style","text-align: center;padding: 26px;width: 500px;display: block;margin: auto;");

