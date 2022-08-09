let inp=document.querySelector("#replace");

let body=document.querySelector("body")

let table=document.querySelector("table")

let dropZone=document.querySelector(".dropzone")

console.log(body.firstElementChild);
inp.addEventListener("replace",function(e){
    let files=Array.from(e.target.files);
    files.forEach((file)=>{
        showImage(file)
    })
    
    
})
 
function showImage(file) {

    if (!file.type.includes("image/")) {
        return
    }
    const fileReader=new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("loadend",function(){
        let src=fileReader.result;
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let td3=document.createElement("td")
        let td4=document.createElement("td")
        let tdSize=document.createElement("td")
        let td5=document.createElement("td")
        let img=document.createElement("img")
        let deleteBtn=document.createElement("button")
        deleteBtn.className="btn btn-danger"
        deleteBtn.innerText="Delete"
        img.src=src
        img.style.width="100%"
        td1.className="no";
        tr.append(td1)
        tr.append(td2)
        td2.append(img)
        tr.append(td3)
        td3.innerText=file.name
        tr.append(td4)
        td4.innerText=file.type
        tdSize.innerText=(file.size/1024).toString().substring(0,5)+" kb"
        tr.append(tdSize)
        tr.append(td5)
        td5.style.display="flex"
        td5.style.alignItems="center"
        td5.style.justifyContent="center"
        td5.append(deleteBtn)
        body.append(tr)
        let nos=document.querySelectorAll(".no")

    })
    

}
