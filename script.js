const storyText = document.getElementById('story-text');
const choices = document.getElementById('choices');
const stageMap = {
  start: "step-empathize",
  intro: "step-empathize",
  empathize: "step-empathize",
  define: "step-define",
  ideate: "step-ideate",
  prototypeApp: "step-prototype",
  prototypeCampaign: "step-prototype",
  testAppTrust: "step-test",
  testAppMap: "step-test",
  testCampaignEducators: "step-test",  // Fixed from testCampaignEducators
  testCampaignSocial: "step-test",      // Fixed from testCampaignSocial
  partner: "step-prototype",
  newInitiative: "step-prototype",  // Fixed typo (was 'newInitiative')
  testPartnerTech: "step-test",
  testPartnerEvent: "step-test",
  testInitiativePilot: "step-test",  // Fixed typo (was 'testInitiativePilot')
  testInitiativeScale: "step-test",
  refineModel: "step-test",
  feedbackScale: "step-test"
};




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
  },
  prototypeApp: {
  text: "You begin designing a mobile app that connects underserved entrepreneurs with community lenders. What feature do you prioritize first?",
  choices: [
    { text: "A trust-based lending score system.", next: "testAppTrust" },
    { text: "A map of local lenders and advisors.", next: "testAppMap" }
  ]
},
  prototypeCampaign: {
  text: "You design a campaign to teach financial literacy in high schools. What’s your first step?",
  choices: [
    { text: "Partner with local educators.", next: "testCampaignEducators" },
    { text: "Launch a social media awareness drive.", next: "testCampaignSocial" }
  ]
},
  partner: {
  text: "You reach out to a local nonprofit already working on wealth equity. They’re excited to collaborate. What do you offer?",
  choices: [
    { text: "Tech support to improve their outreach.", next: "testPartnerTech" },
    { text: "Help organizing a community event.", next: "testPartnerEvent" }
  ]
},
  newInitiative: {
  text: "You gather community input and co-design a new initiative focused on cooperative housing. What’s your launch strategy?",
  choices: [
    { text: "Pilot in one neighborhood.", next: "testInitiativePilot" },
    { text: "Apply for city funding and scale fast.", next: "testInitiativeScale" }
  ]
},
  testAppTrust: {
  text: "Users love the trust-based score, but some worry about bias. You iterate based on feedback. Great job applying systems thinking!",
  choices: [{ text: "Play again", next: "start" }]
},
  testInitiativePilot: {
  text: "You launch the pilot in Roxbury. Community members are enthusiastic, and early results show promise. You gather feedback and prepare to expand.",
  choices: [
    { text: "Apply for city funding to scale.", next: "testInitiativeScale" },
    { text: "Refine the model with more community input.", next: "refineModel" }
  ]
},
  testInitiativeScale: {
  text: "You secure city funding and expand to three neighborhoods. However, without refining the model, some communities feel left out. What do you do?",
  choices: [
    { text: "Pause expansion and re-engage communities.", next: "refineModel" },
    { text: "Continue scaling and address issues later.", next: "feedbackScale" }
  ]
},
  refineModel: {
  text: "You hold listening sessions and adapt the initiative to better meet local needs. Trust grows, and the model becomes a blueprint for other cities.",
  choices: [
    { text: "Celebrate your success and restart the game.", next: "start" }
  ]
},
  
feedbackScale: {
  text: "Some communities disengage due to lack of inclusion. You learn the importance of iterative design and community feedback.",
  choices: [
    { text: "Restart and try a different approach.", next: "start" }
  ]
},
// Add these new scenes to your gameData object
testPartnerTech: {
  text: "You develop a digital platform that helps the nonprofit track engagement and measure impact. The partnership creates new opportunities for underserved entrepreneurs.",
  choices: [
    { text: "Continue expanding this partnership", next: "refineModel" },
    { text: "Start over with new approach", next: "start" }
  ]
},
testPartnerEvent: {
  text: "The community event brings together local business owners, lenders, and policymakers. Important connections are made, but sustaining the momentum will require follow-up.",
  choices: [
    { text: "Plan follow-up meetings", next: "refineModel" },
    { text: "Try a different approach", next: "start" }
  ]
}, 
   testCampaignEducators: {
  text: "Teachers help tailor the curriculum to student needs. The pilot program shows promising engagement, but scaling will require more resources.",
  choices: [
    { text: "Seek funding to expand the program", next: "testInitiativeScale" },
    { text: "Refine the curriculum further", next: "refineModel" }
  ]
},
testCampaignSocial: {
  text: "Your viral campaign reaches thousands, but educators note it lacks depth for classroom use. How do you respond?",
  choices: [
    { text: "Partner with educators to add substance", next: "testCampaignEducators" },
    { text: "Focus on awareness and leave education to others", next: "feedbackScale" }
  ]
}
}




function showScene(sceneKey) {
  const scene = gameData[sceneKey];
  storyText.textContent = scene.text;
  choices.innerHTML = '';
  
  // Update progress tracker
  updateProgressTracker(sceneKey);
  
  scene.choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice.text;
    button.classList.add('choice-button');
    button.onclick = () => showScene(choice.next);
    choices.appendChild(button);
  });
}

function updateProgressTracker(sceneKey) {
  // Reset all steps
  document.querySelectorAll('.step').forEach(step => {
    step.classList.remove('active', 'completed');
  });
  
  // Get current step from mapping
  const currentStepId = stageMap[sceneKey];
  if (!currentStepId) return;
  
  // Mark current step as active
  const currentStep = document.getElementById(currentStepId);
  if (currentStep) {
    currentStep.classList.add('active');
  }
  
  // Mark previous steps as completed
  const allSteps = ['step-empathize', 'step-define', 'step-ideate', 'step-prototype', 'step-test'];
  const currentIndex = allSteps.indexOf(currentStepId);
  
  for (let i = 0; i < currentIndex; i++) {
    const prevStep = document.getElementById(allSteps[i]);
    if (prevStep) {
      prevStep.classList.add('completed');
    }
  }
}

function advanceToStage(stageName) {
  document.querySelectorAll('.stage').forEach(stage => {
    stage.classList.remove('completed');
    if (stage.dataset.stage === stageName) {
      stage.classList.add('completed');
    }
  });
}

// Start the game - only call this once!
showScene('start');