let contacts = document.querySelector(".contact-list")


function readImage(file) {
    
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      img.src = event.target.result;
    });
    reader.readAsDataURL(file);
}

    let contactall = document.querySelectorAll(".contact-item")

    const output = document.getElementById('output');

    document.getElementById('file').addEventListener('change', event => {
    output.src = ' ';

    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.addEventListener('load', event => {
      output.src = event.target.result;
    });
    reader.readAsDataURL(file);
  }); 


function addcontent(event)
{

let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let group = document.getElementById("group")
let bio = document.getElementById("bio")


let contact = document.createElement("div")
contact.classList.add("contact-item")
contact.id=Math.floor(Math.random()*20000)


let img = document.createElement("div")
img.classList.add("pic")
let pic = document.createElement("img")
pic.setAttribute("src",output.src)
img.append(pic)




let text = document.createElement("div")
text.classList.add("info")
let fname = firstname.value,lname = lastname.value;
let title1 = document.createElement("p")
title1.classList.add("name")
title1.textContent=fname+" "+lname
let title2 = document.createElement("p")
title2.classList.add("group")
title2.textContent=group.value
let content = document.createElement("p")
content.textContent=bio.value
let sbmbtn = document.querySelector(".btn-submit")

text.append(title1,title2,content)

let closer = document.createElement("div")
closer.classList.add("close")

let icon = document.createElement("p")
icon.textContent="X"
closer.append(icon)

contact.prepend(img,text,closer)
contacts.prepend(contact)

icon.addEventListener("click",()=>contact.remove())

text.addEventListener("click",function(){
    firstname.value=fname
    lastname.value=lname
    group.value=title2.textContent
    bio.value=content.textContent
    output.src = pic.src
    // contact.remove()

    let allcontact = document.querySelectorAll(".contact-item")
    allcontact.forEach(element => {
    element.style.opacity=1
    sbmbtn.textContent="modifier"
    sbmbtn.style.background="#3d423e"
        
    });
   
    
    contact.style.opacity=0.2


     let id = document.getElementById("id")
     id.value=contact.id
     form.append(id)
}
)


    let allcontact = document.querySelectorAll(".contact-item")


    allcontact.forEach(element => {

        if(id.value==element.id)
        {
            element.remove()
        }
    });

event.preventDefault()
form.reset()
output.src=""
sbmbtn.textContent="Créer"
sbmbtn.style.background="#388bde"
}

let form = document.querySelector("form")

form.addEventListener("submit",addcontent)
