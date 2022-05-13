let message = document.querySelector(".top")
let content = document.querySelector("#hide")
let image = document.getElementById("btn");
let stateimg = false;
const pass = "Melka";
let passuse = "";
image.addEventListener('click', function(){
 
    stateimg = !stateimg;
   
    image.setAttribute('width','100px')
    if(stateimg==true)
        {
            image.setAttribute('src','off.png')
            content.style.display="none";
            message.style.display="inline";
        }
        else
        {
            while(passuse!=pass)
            {
                  passuse = prompt("Ente r a password to unlock")
            }
            image.setAttribute('src','on.jpg')
            content.style.display="block";
            message.style.display="none";
        }
            

        }
)




//localStorage.setItem("killer", "Melkisedeck")


d