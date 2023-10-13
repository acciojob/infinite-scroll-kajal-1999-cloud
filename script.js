//your code here!
const scrollbox = document.getElementById("infi-list");

let y =1;
function createitem(){
	
    for(let i = 0; i<10 ; i++){
        const createelement = document.createElement("li");
        createelement.innerText= `Item ${y}`
		scrollbox.appendChild(createelement);
		y++;
	}
}


function addmoreelements(){
    const totolscroll = scrollbox.scrollTop;
    const maxscroll = scrollbox.scrollHeight - scrollbox.clientHeight;
    const threshold = maxscroll-totolscroll;
    if(threshold<=5){
        for(let i = 0; i<2; i++){
            createitem();
        }
    }
}

createitem();

scrollbox.addEventListener("scroll" , addmoreelements)