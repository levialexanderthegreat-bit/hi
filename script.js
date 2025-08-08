
function summarize() {
  showOutput("Summary: This would summarize your handwriting using AI.");
}

function generateNotes() {
  showOutput("Generated Notes: Your input has been converted into structured notes.");
}

function explain() {
  showOutput("Explanation: Here's a detailed explanation of your topic.");
}

function translate() {
  showOutput("Translation: Your text has been translated.");
}

function askAnything() {
  showOutput("Answer: This is a response to your query using AI.");
}

function showOutput(message) {
  document.getElementById("output").textContent = message;
}
