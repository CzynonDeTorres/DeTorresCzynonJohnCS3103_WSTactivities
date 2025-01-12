const input = document.getElementById("textInput");
const wordCountDiv = document.getElementById("wordCount");
const sentenceCountDiv = document.getElementById("sentenceCount");

function updateCounter(){
    const text = input.value;

    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    wordCountDiv.textContent = `Words: ${wordCount}`;

    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;
    sentenceCountDiv.textContent = `Sentences: ${sentenceCount}`;
}

document.addEventListener('input', updateCounter);