// // alert("hello");
// console.log("hello");


const tsk=document.getElementById('tasklist');
shownodes();
function add(e){

    // e.preventDefault();

    var val=document.getElementById('inp').value;
    var odata=localStorage.getItem('data');
    // var dataObj;
    if(odata==null)
    {
        dataObj=[];
    }
    else{
        dataObj=JSON.parse(odata);
    }

    dataObj.push(val);

    localStorage.setItem('data',JSON.stringify(dataObj));
    val.value="";

    console.log(dataObj);

    shownodes();
}


function shownodes()
{
    var odata=localStorage.getItem('data');
    // var dataObj;
    if(odata==null)
    {
        dataObj=[];
    }
    else{
        dataObj=JSON.parse(odata);
    }

    let html="";
    dataObj.forEach(function(element,index) {

        html +=
        `

        
        <form action="">
        <div class="task-list">
        <h3 class="title">${index+1}</h3>
            <p class="text">${element}</p>
            <button id="${index}" onclick="del(this.id)">del</button>
        </form>
            
        </div>

       
        `
        
    });

    let tdata=document.getElementById('task');
    if(dataObj.length!=0)
    {
        tdata.innerHTML=html;
    }
    else{
        tdata.innerHTML=`nothing to show,please add task`;
    }

}

function del(index){
    console.log(index);

    var odata=localStorage.getItem('data');
    // var dataObj;
    if(odata==null)
    {
        dataObj=[];
    }
    else{
        dataObj=JSON.parse(odata);
    }

    dataObj.splice(index,1);
    localStorage.setItem('data',JSON.stringify(dataObj));
    shownodes();
}























// // document.getElementById('raj').innerHTML="hjdhsfhksfchsdfhb";

// function add(){
//     const inpt=document.getElementById('inp').value;
//     console.log(inpt);

//     const list=document.createElement('li');
//     list.appendChild(document.createTextNode(inpt));
//     tsk.appendChild(list);
// }


// const tsk=document.getElementById('tasklist');

// function add(){
//     var val=document.getElementById('inp').value;
//     // console.log(val);

    
   


//     if(localStorage.getItem('data')==null)
//     {
//         localStorage.setItem('data','[]');
//     }


//     // var obj={key:n}

//     // localStorage.setItem('data',val);
//     // console.log(localStorage);

//    var old_data=JSON.parse(localStorage.getItem('data'));
//    old_data.push(val);

//    localStorage.setItem('data',JSON.stringify(old_data));

//    var len=old_data.length;
//    console.log(len);
   
//    while(len!=0)
//    {
//     const list=document.createElement('li');
//     list.appendChild(document.createTextNode(old_data[len]));
//     tsk.appendChild(list);
//     len=len-1;
//    }

//    tsk.clearall();

// //    localStorage.removeItem(val);
 
// }


// function del()
// {
//     var old_data=JSON.parse(localStorage.getItem('data'));
//     var val=document.getElementById('inp').value;

//    var ind=old_data.indexOf(val);

//    while(ind!=-1)
//    {
//     old_data.splice(ind,1);
//     localStorage.setItem('data',JSON.stringify(old_data));

//     console.log("deleted");

//     ind=old_data.indexOf(val);




//    }
// // else{
// //     console.log("no deleted");
// // }
// }



