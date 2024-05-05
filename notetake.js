var currText = ""

const ntBox = document.getElementById("ntxtbox")
const saveButton = document.getElementById("save")

if(localStorage.getItem("noteTake") != null && localStorage.getItem("noteTake") != ""){
    currText = localStorage.getItem("noteTake")
    ntBox.innerHTML = currText
}



function updateStorage(txt){
    if(txt == null){
        localStorage.setItem("noteTake",currText)
    }else{
        localStorage.setItem("noteTake",txt)
    }
   
}

function saveFile(txt){
    var hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:attachment/text,' + encodeURI(currText);
	hiddenElement.target = '_blank';
	hiddenElement.download = 'notes-focusbubble.txt';
	hiddenElement.click();
    if(txt!=null){
        ntBox.innerHTML = txt
        currText = txt
        updateStorage(txt)
    }
}

function promptOptions(txt){
    let choice = prompt("Do you want to save your current note(s)? (Y/N)")
    choice.toLowerCase
    
    if(choice == 'y' || choice == 'Y'){
        saveFile(txt)
    }else{
        ntBox.value = txt
        currText = txt
        updateStorage(txt)
    }
    
}

document.getElementById('fileInput').addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        // Create a FileReader to read the file
        var reader = new FileReader();

        reader.onload = function(e) {
            if(ntBox.value != ""){
                promptOptions(e.target.result)
            }else{
                currText = e.target.result
                ntBox.value = currText
                updateStorage(e.target.result)
            }
            
        };

        // Read the file as text
        reader.readAsText(file);
    }
});


ntBox.addEventListener("change",function(){
    currText = ntBox.value
    updateStorage(ntBox.value)
})

saveButton.onclick = function(){
    saveFile()
}


