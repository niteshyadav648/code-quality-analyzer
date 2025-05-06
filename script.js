function analyzeCode() {
    const code = document.getElementById('codeInput').value;
  
    // 🧪 For now, fake analysis (later connect ESLint)
    let score = 100;
    let suggestions = [];
  
    if (code.includes("var ")) {
      score -= 20;
      suggestions.push("Use 'let' or 'const' instead of 'var'.");
    }
  
    if (!code.includes(";")) {
      score -= 10;
      suggestions.push("Consider adding semicolons for clarity.");
    }
  
    const result = `
      <h3>Score: ${score}/100</h3>
      <ul>${suggestions.map(s => `<li>${s}</li>`).join('')}</ul>
    `;
  
    document.getElementById("output").innerHTML = result;
  }
  