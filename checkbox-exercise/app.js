const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

console.log(checkboxes);

let lastChecked;


function handleCheck(e) {

    if (e.shiftKey & this.checked) {
    

}

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));