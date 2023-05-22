
let blogs =[{title:'Title1', body:'1st post'}];
let lastActivityTime=0;

function updateLastUserActivityTime(){

  return new Promise((resolve,reject)=>{

       setTimeout( () => {
       lastActivityTime++;
       resolve(lastActivityTime);
    }, 4000)
  });

}


async function createBlog() {

  let prom= new Promise( (resolve, reject) => {
    setTimeout( () => {
      blogs.push({title:'Title'+(blogs.length+1) ,body:'body'+(blogs.length+1)});
      resolve();
    }, 3000)
    
    
  }) 
  let created=await prom;
  return created;
}

async function deleteBlog(){

  let prom=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(blogs.length>0){
      resolve(blogs.pop());
    }else{ reject("ERROR");}
  },1000);
  });
let deleted=await prom;
  return
}

function printBlog(){
 
    setTimeout(()=>{
        let output='';
        for(let i=0;i<blogs.length;i++){
            output+='<li>'+blogs[i].title+ '</li>';
            
        }
        document.body.innerHTML=output;
    },1000);

}



createBlog().then(()=>printBlog());
console.log(blogs);

console.log(blogs);
async function demo (){
let a=await Promise.all([createBlog(),createBlog(),createBlog()]);
printBlog();
}
demo();