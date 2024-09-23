function getInputValueById(id) {
    const inputValue =document.getElementById(id).value ;
    return inputValue
}
function getHtmlValueById(id) {
    const value =document.getElementById(id).innerText ;
    const numberValue = parseFloat (value);
    return numberValue
}