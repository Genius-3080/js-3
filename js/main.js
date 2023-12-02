var searchIn = document.querySelector('.search')
var textTitle = document.querySelector('.search__title')
function fn(){
    if(searchIn.value != searchIn.value.toLowerCase()){
        searchIn.classList.add('google')
        textTitle.textContent = 'Succesfull✅'
        textTitle.style.color = 'green'
        searchIn.style.borderBottom = '2px solid green'
        
    }else{
        searchIn.style.borderBottom = '2px solid red'
        textTitle.style.color = 'red'
        textTitle.textContent = 'Error_Invalid_Uppercase❌'
    }
}