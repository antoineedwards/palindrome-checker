const input = document.getElementById("input")
const result = document.getElementById("result")


function reverseString(str){
    return str.split("").reverse().join("")

}

function check(){
    const value = input.value
    const reverse = reverseString(value)
    if (value == ""){
        result.textContent = "Please Enter a Word"
    }
    else if(value == reverse){
        result.textContent = "Palindrome!"
    } 
    else{
        result.textContent = "Not a Palindorme"
    }
    input.value = ""
}