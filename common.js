function getInputValueById(id) {
    const inputValue =document.getElementById(id).value ;
    return inputValue
}
function getHtmlValueById(id) {
    const value =document.getElementById(id).innerText ;
    const numberValue = parseFloat (value);
    return numberValue
}

function showSectionId(id) {
    document.getElementById("donation").classList.add('hidden')
    document.getElementById("history").classList.add('hidden' )
    document.getElementById(id).classList.remove('hidden')

}
document.getElementById("home-btn").addEventListener('click', function () {
    window.location.href ='/index.html';
})