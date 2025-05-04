const emojiDictionary = {
    "love": "❤️",
    "pizza": "🍕",
    "happy": "😊",
    "cat": "🐱",
    "dog": "🐶",
    "sun": "🌞",
    "moon": "🌙",
    "coffee": "☕",
    "book": "📚",
    "music": "🎶",
    "car": "🚗",
    "star": "⭐",
    "fire": "🔥",
    "rain": "🌧️",
    "cloud": "☁️",
    "earth": "🌍",
    "game": "🎮",
    "smile": "😄",
    "angry": "😡",
    "laugh": "😂",
    "heart": "💖",
    "flower": "🌸",
    "tree": "🌳",
    "butterfly": "🦋",
    "airplane": "✈️",
    "rocket": "🚀",
    "rocket": "🚀",
    "trophy": "🏆",
    "soccer": "⚽",
    "basketball": "🏀",
    "baseball": "⚾",
    "guitar": "🎸",
    "shopping": "🛍️",
    "camera": "📷",
    "tv": "📺",
    "laptop": "💻",
    "phone": "📱",
    "lightning": "⚡",
    "earth": "🌍",
    "pencil": "✏️",
    "paperclip": "📎",
    "gift": "🎁",
    "snowman": "⛄",
    "snowflake": "❄️",
    "bell": "🔔"
  };
  
  // Function to translate sentence to emoji
  function translateToEmoji() {
    let sentence = document.getElementById('sentence').value.toLowerCase();
    let words = sentence.split(" ");
    
    let translated = words.map(word => {
      return emojiDictionary[word] || word;  // If word is in dictionary, use emoji, otherwise use the word itself
    });
  
    let emojiResult = translated.join(" ");
    
    document.getElementById('emojiResult').textContent = emojiResult;
  }