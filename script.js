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
    text: "You design a campaign to teach financial literacy in high schools. What's your first step?",
    choices: [
      { 
        text: "Partner with local educators.", 
        next: "testCampaignEducators",
        feedback: "Good choice! Partnering with educators ensures relevance to student needs."
      },
      { 
        text: "Launch a social media awareness drive.", 
        next: "testCampaignSocial",
        feedback: "Social media reaches wide audiences but may lack depth without educator input."
      }
    ]
  },

  // Enhanced test scenes with feedback metrics
  testCampaignEducators: {
    text: "Teachers help tailor the curriculum to student needs. The pilot program shows promising engagement, but scaling will require more resources.",
    feedback: {
      empathy: 3,
      systemsThinking: 2,
      iteration: 1
    },
    choices: [
      { 
        text: "Seek funding to expand the program", 
        next: "testInitiativeScale",
        feedback: "Scaling requires balancing growth with maintaining quality."
      },
      { 
        text: "Refine the curriculum further", 
        next: "refineModel",
        feedback: "Iterative improvement leads to more sustainable solutions."
      }
    ]
  },

  testCampaignSocial: {
    text: "Your viral campaign reaches thousands, but educators note it lacks depth for classroom use. How do you respond?",
    feedback: {
      empathy: 1,
      systemsThinking: 2,
      iteration: 3
    },
    choices: [
      { 
        text: "Partner with educators to add substance", 
        next: "testCampaignEducators",
        feedback: "Combining reach with depth creates more impact."
      },
      { 
        text: "Focus on awareness and leave education to others", 
        next: "feedbackScale",
        feedback: "Specialization has value, but integrated approaches often work best."
      }
    ]
  },
  testAppTrust: {
  text: "Your trust-based scoring system helps reduce bias in lending decisions, but some community members worry about how the algorithm works.",
  choices: [
    { 
      text: "Make the algorithm more transparent", 
      next: "transparentAlgorithm",
      feedback: "Transparency builds trust in new systems."
    },
    { 
      text: "Add human oversight to the process", 
      next: "humanOversight",
      feedback: "Combining tech with human judgment often works best."
    }
  ]
},

// New scenes to continue the story
transparentAlgorithm: {
  text: "You publish your algorithm's logic and hold community workshops to explain it. Trust increases, and lenders report better outcomes.",
  choices: [
    { 
      text: "Expand to more neighborhoods", 
      next: "scaleSuccess",
      feedback: "Successful pilots deserve expansion with community input."
    },
    { 
      text: "Document the process for other cities", 
      next: "documentProcess",
      feedback: "Sharing knowledge multiplies impact."
    }
  ]
},

humanOversight: {
  text: "You train community members to review algorithmic decisions. This hybrid approach catches edge cases and builds local capacity.",
  choices: [
    { 
      text: "Develop a training program for more reviewers", 
      next: "scaleSuccess",
      feedback: "Investing in people creates sustainable systems."
    },
    { 
      text: "Refine the algorithm based on human insights", 
      next: "refineModel",
      feedback: "Human feedback improves machine systems."
    }
  ]
},

scaleSuccess: {
  text: "Your expanded program shows promising results across multiple neighborhoods. The model is attracting attention from city officials.",
  choices: [
    { 
      text: "Present to the city council for support", 
      next: "cityCouncil",
      feedback: "Policy support can create lasting change."
    },
    { 
      text: "Keep focus on community-level growth", 
      next: "communityFocus",
      feedback: "Grassroots solutions often work best."
    }
  ]
},

// Additional scenes to continue the narrative
cityCouncil: {
  text: "The city adopts your model as part of its economic development strategy, providing funding for citywide implementation.",
  choices: [
    { text: "Celebrate this systemic change!", next: "start" }
  ]
},

communityFocus: {
  text: "By growing organically, your solution maintains strong community roots while gradually expanding its impact.",
  choices: [
    { text: "Continue this successful approach", next: "start" }
  ]
},

documentProcess: {
  text: "Your open-source toolkit helps five other cities launch similar programs, creating a national movement for fair lending.",
  choices: [
    { text: "Restart to try a different approach", next: "start" }
  ]
}
}

function showScene(sceneKey) {
  const scene = gameData[sceneKey];
  storyText.textContent = scene.text;
  choices.innerHTML = '';
  
  // Add feedback display if available
  if (scene.feedback) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'feedback-message';
    feedbackDiv.textContent = scene.feedback;
    storyText.appendChild(feedbackDiv);
  }
  
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