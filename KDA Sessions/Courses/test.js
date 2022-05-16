let btn = document.querySelector(".clicker")

function addcontent()
{
    let main = document.querySelector(".main")
    
    let ul = document.createElement("ul")
    let li = document.createElement("li")
    li.textContent="hello"+Math.random()
    ul.append(li)
    main.prepend(ul)
    li.addEventListener("click", )
    main.id="test"
}


btn.addEventListener("click",()=>addcontent())
