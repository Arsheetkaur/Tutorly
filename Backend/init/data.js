const chatData = [
  {
    "name": "Help with Algebra Homework",
    "date": "2025-04-01",
    "username": "jason_m",
    "messages": [
      { "sender": "user", "text": "Can you help me solve x + 5 = 12?" },
      { "sender": "ai", "text": "Sure! Subtract 5 from both sides. x = 7." },
      { "sender": "user", "text": "Got it. What about 3x = 15?" },
      { "sender": "ai", "text": "Divide both sides by 3. x = 5." }
    ]
  },
  {
    "name": "Explain Photosynthesis for Biology Test",
    "date": "2025-04-02",
    "username": "emma_lee",
    "messages": [
      { "sender": "user", "text": "Can you explain photosynthesis simply?" },
      { "sender": "ai", "text": "Sure! It's how plants make their food using sunlight, water, and CO₂." },
      { "sender": "user", "text": "What’s the formula?" },
      { "sender": "ai", "text": "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂" },
      { "sender": "user", "text": "Thanks!" }
    ]
  },
  {
    "name": "Need Summary of Shakespeare's Macbeth",
    "date": "2025-04-03",
    "username": "nina_s",
    "messages": [
      { "sender": "user", "text": "Summarize Macbeth for me." },
      { "sender": "ai", "text": "Macbeth is a tragedy about a Scottish nobleman who becomes king through murder and descends into madness." },
      { "sender": "user", "text": "What’s the main theme?" },
      { "sender": "ai", "text": "Ambition and its corrupting power." }
    ]
  },
  {
    "name": "Physics: Understanding Newton's Laws",
    "date": "2025-04-04",
    "username": "liam_89",
    "messages": [
      { "sender": "user", "text": "Can you explain Newton’s 3 laws?" },
      { "sender": "ai", "text": "1st: Objects in motion stay in motion. 2nd: F = ma. 3rd: Every action has an equal and opposite reaction." },
      { "sender": "user", "text": "Thanks, makes sense now!" }
    ]
  },
  {
    "name": "Tips for History Essay on WW2",
    "date": "2025-04-05",
    "username": "carla_t",
    "messages": [
      { "sender": "user", "text": "Need help writing a WW2 essay intro." },
      { "sender": "ai", "text": "Start with a hook like: 'World War II reshaped global politics and human history forever.'" },
      { "sender": "user", "text": "Good. What should I include in the body?" },
      { "sender": "ai", "text": "Talk about causes, key events, and the aftermath." },
      { "sender": "user", "text": "And a strong conclusion?" },
      { "sender": "ai", "text": "Summarize the impact and connect it to today's world." }
    ]
  },
  {
    "name": "Geometry Problem Solving",
    "date": "2025-04-06",
    "username": "ben_ho",
    "messages": [
      { "sender": "user", "text": "How do I find the area of a triangle?" },
      { "sender": "ai", "text": "Use the formula: ½ × base × height." },
      { "sender": "user", "text": "What if I only have side lengths?" },
      { "sender": "ai", "text": "Then use Heron’s formula." },
      { "sender": "user", "text": "Can you show an example?" },
      { "sender": "ai", "text": "Sure! For sides 7, 8, and 9, calculate s = 12, then area = √(s(s-a)(s-b)(s-c)) = √(12×5×4×3)." }
    ]
  },
  {
    "name": "French Vocabulary Practice",
    "date": "2025-04-07",
    "username": "sophie_d",
    "messages": [
      { "sender": "user", "text": "How do you say 'book' in French?" },
      { "sender": "ai", "text": "'Book' is 'livre' in French." },
      { "sender": "user", "text": "And 'I am reading a book'?" },
      { "sender": "ai", "text": "'Je lis un livre.'" }
    ]
  },
  {
    "name": "Help Me Understand the Water Cycle",
    "date": "2025-04-08",
    "username": "mike_w",
    "messages": [
      { "sender": "user", "text": "What are the stages of the water cycle?" },
      { "sender": "ai", "text": "Evaporation, condensation, precipitation, and collection." },
      { "sender": "user", "text": "What’s collection?" },
      { "sender": "ai", "text": "It’s when water gathers in oceans, rivers, lakes, or the ground." }
    ]
  },
  {
    "name": "Computer Science - What is a Function?",
    "date": "2025-04-09",
    "username": "lucy_tech",
    "messages": [
      { "sender": "user", "text": "Explain what a function is in programming." },
      { "sender": "ai", "text": "A function is a reusable block of code that performs a specific task." },
      { "sender": "user", "text": "How do you write one in Python?" },
      { "sender": "ai", "text": "Use 'def'. Example: def greet(): print('Hello')." },
      { "sender": "user", "text": "Thanks! That was helpful." }
    ]
  }
]


module.exports = { data: chatData };