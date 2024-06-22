// Uppercase
document.getElementById("upper-case").addEventListener("click", function() {
    let text = document.getElementById("text-input").value;
    document.getElementById("text-input").value = text.toUpperCase();
});

// Lowercase
document.getElementById("lower-case").addEventListener("click", function() {
    let text = document.getElementById("text-input").value;
    document.getElementById("text-input").value = text.toLowerCase();
});

// Proper Case
document.getElementById("proper-case").addEventListener("click", function () {
    let text = document.getElementById("text-input").value.toLowerCase();
    document.getElementById("text-input").value = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
});

// Sentence Case
document.getElementById("sentence-case").addEventListener("click", function() {
    let text = document.getElementById("text-input").value.toLowerCase();
    document.getElementById("text-input").value = text.split(/([.?!]\s*)/).map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join('');
});