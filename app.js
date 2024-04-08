let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
let input= document.querySelector("input");


btn.addEventListener("click", async ()=>{
    let country = input.value;

    let colArr = await getUnivercity(country)
    console.log(colArr);
    Show(colArr);
})

function Show(colArr){
    let ul = document.querySelector("ul");
    ul.innerText=""
    for(col of colArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        ul.appendChild(li);
    }
}

async function getUnivercity(country){
   try{
    let res = await axios.get(url+country);
    return res.data;

   } catch(e){
    console.log("error: ", e);
    return [];
   }
  
}