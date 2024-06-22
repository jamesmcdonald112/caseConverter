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

// Save Text File
function download(filename, text) {
    // Create an invisible <a> element to save the hyperlink. This does not exist anywhere on
    // the page, only in memory
    let element = document.createElement('a');

    // Set the elements ('a') href attribute to a data URL containing the text.
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));

    // Set the download attribute with the filename
    element.setAttribute('download', filename);

    // Make the <a> element invisible
    element.style.display = 'none';

    // Append the <a> element to the document body
    document.body.append(element);

    // Programmatically click the <a> element to trigger the download
    element.click();

    // Remove the <a> element from the document body
    document.body.remove(element);
}

document.getElementById("save-text-file").addEventListener("click", function () {
    let text = document.getElementById("text-input").value;
    download("text.txt", text);
});