

// აკრეფის ივენთი
window.addEventListener("keydown",(e)=>{
    console.log(e.code);
    if (e.target.tagName=="INPUT"){

        var parent = document.querySelector('.code-tab')
        var lastchild = parent.lastElementChild
        var input = lastchild.querySelector("input")
        var last = (parseInt(input.getAttribute("id").substring(1))+1).toString()
        // ენთერზე დამატება
        if(  e.code == "Enter" ){
            elvalue = e.target.value
            lastchild.outerHTML +=  `<div id="code${last}"><span>${last}</span><input  id="L${last}" type="text"  autocomplete="off" class="code-line"></div>`
            document.getElementById("L"+(parseInt(e.target.id.substring(1))+1).toString()).focus()            
            
           document.getElementById("L"+(parseInt(e.target.id.substring(1))).toString()).value = elvalue
           

        }

        // ბექსფეისზე წაშლა
        else if( e.code == "Backspace" && e.target.value <= 0 && e.target.id.substring(1) != 1 ){
            document.getElementById("code"+(parseInt(e.target.id.substring(1))).toString().toString()).remove()
            document.getElementById("L"+(parseInt(e.target.id.substring(1))-1).toString()).focus()
    
        }
        if( e.code == "Backspace" && e.target.value <= 0 && e.target.id.substring(1) == 2 ){    
            document.querySelector("input[type='text']").focus()
        }

        // ისრებზე დამატება და წაშლა
        if( e.code == "ArrowDown" ){    
            document.getElementById("L"+(parseInt(e.target.id.substring(1))+1).toString()).focus()

        }else if(e.code == "ArrowUp" && e.target.id.substring(1) == 2){
            try{
                           document.querySelector("input[type='text']").focus()
 
            }catch{}
        
        }

        else if( e.code == "ArrowUp" ){ 
            document.getElementById("L"+(parseInt(e.target.id.substring(1))-1).toString()).focus()
        }
        // shift delete
        if (e.code == "Delete" && e.shiftKey) {
            document.getElementById("L"+(parseInt(e.target.id.substring(1))-1).toString()).focus()
            document.getElementById("L"+(parseInt(e.target.id.substring(1))).toString()).value = ""
        }
        // tab
        if (e.code == "Tab" ) {
            e.preventDefault()
            // document.getElementById("L"+(parseInt(e.target.id.substring(1))-1).toString()).focus()
            document.getElementById("L"+(parseInt(e.target.id.substring(1))).toString()).value += "    "
        }

    }
})

