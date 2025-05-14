
// Stores reusable pieces of the message

const opening = [
  "Hey there, legend!",
  "Listen up, superstar!",
  "Rise and shine, warrior!",
  "Greetings, brave soul!",
  "What's up, champ?"
];

const timeRefs = [
  "This morning", 
  "Right now", 
  "At this very moment", 
  "Today", 
  "In this very second"
];

const motivation = [
  "you’re building your dreams.",
  "you’re overcoming doubt.",
  "you’re becoming your best self.",
  "you’re creating something powerful.",
  "you’re making real progress."
];

const actions = [
  "Take the leap.",
  "Push through the challenge.",
  "Speak your truth.",
  "Trust the process.",
  "Own your story."
];

const closing = [
  "Now go conquer the day!",
  "Make magic happen!",
  "Keep crushing it!",
  "Believe in your journey.",
  "You've got this!"
];

const phrase_structure = [
    opening,
    timeRefs,
    motivation,
    actions,
    closing
]

// Randomly selects an array element

const random_parts = (array) => {
    const part = array[Math.floor(Math.random() * array.length)];
    return part
}

// Assembles and formats the message
    
const return_a_message = () => {
    const phrase = [];
    for (i of phrase_structure) {
        phrase.push(random_parts(i))
    }
    return console.log(phrase.join(' '))
}

// Runs the generator when program starts 

return_a_message()