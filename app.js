
let saveEl = document.getElementById('save-el')
let count = 0
let countEl =document.getElementById("count-el")

function increment(){
    count +=1
    countEl.textContent = count
    


}
function del(){

    if(count > 0){
        count -=1
    }
    
    countEl.innerText = count

}
function save(){

    let entry = count + " - "
    saveEl.textContent += entry
    countEl.innerText = 0
    count = 0
    

}






 