const storyText = document.getElementById('story-text');
const choices = document.getElementById('choices');

const gameData = {
  start: {
    text: "Welcome to Design Futures: Greater Boston. Your mission is to help close the racial wealth gap. Ready to begin?",
    choices: [
      { text: "Yes, let's go!", next: "empathize" },
      { text: "Tell me more first.", next: "intro" }
    ]
  },
  intro: {
    text: "You'll explore real-world challenges, meet community members, and design systems that make a difference.",
    choices: [
      { text: "I'm ready now!", next: "empathize" }
    ]
  },
  empathize: {
    text: "You meet Aisha, a local entrepreneur struggling to get funding for her business. What do you do?",
    choices: [
      { text: "Ask about her challenges.", next: "define" },
      { text: "Offer a solution immediately.", next: "feedback1" }
    ]
  },
  define: {
    text: "You learn that systemic barriers in banking and credit access are major issues. What's next?",
    choices: [
      { text: "Brainstorm community-based solutions.", next: "ideate" },
      { text: "Research existing programs.", next: "research" }
    ]
  },
  feedback1: {
    text: "Jumping to solutions without understanding the problem can lead to ineffective outcomes. Try again.",
    choices: [
      { text: "Go back and ask about her challenges.", next: "define" }
    ]
  },
    ideate: {
    text: "You brainstorm ideas like community lending platforms, financial literacy programs, and tech tools for credit scoring. What do you want to prototype?",
    choices: [
      { text: "Prototype a community lending app.", next: "prototypeApp" },
      { text: "Prototype a financial education campaign.", next: "prototypeCampaign" }
    ]
  },
  research: {
    text: "You discover several local initiatives, but many lack funding or awareness. What do you do next?",
    choices: [
      { text: "Partner with an existing initiative.", next: "partner" },
      { text: "Create a new initiative with community input.", next: "newInitiative" }
    ]
  }

  // Add more scenes here...
};

function showScene(sceneKey) {
  const scene = gameData[sceneKey];
  storyText.textContent = scene.text;
  choices.innerHTML = '';
  scene.choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice.text;
    button.classList.add('choice-button');
    button.onclick = () => showScene(choice.next);
    choices.appendChild(button);
  });
}

showScene('start');
