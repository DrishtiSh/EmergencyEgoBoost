const messages = [
    // Loving messages
    "You're my favorite human and my favorite reason to smile 💕",
    "Just wanted you to know you're absolutely perfect to me ♡",
    "You make my heart do that fluttery thing every single day",
    "I love you more than pizza... and that's saying A LOT! 🍕",
    "You're stuck with me forever, hope you're okay with that! 😘",
    "My love for you is like WiFi - invisible but you know it's there",
    
    // Reassuring messages  
    "Hey, you're doing better than you think you are ♡",
    "Bad days don't last, but cute boyfriends like you do! 💪",
    "You've got this! And if you don't, I've got you 🤗",
    "Remember: you're braver than you believe and stronger than coffee",
    "It's okay to not be okay sometimes. I'm here regardless 💙",
    "You're exactly where you need to be, trust the process ✨",
    
    // Goofy/Silly messages
    "Are you a magician? Because whenever I look at you, everyone else disappears! 🎩",
    "I'd choose you in every lifetime, even if you were a potato 🥔",
    "You're like a human version of a warm hug and good WiFi combined",
    "If you were a vegetable, you'd be a cute-cumber! 🥒",
    "I love you more than I love correcting people's grammar... barely",
    "You're the reason I smile at my phone like an idiot 😊",
    
    // Funny messages
    "I was going to tell you a joke about pizza, but it's too cheesy 🧀",
    "You're like a dictionary - you give meaning to my life! 📖",
    "I love you even when you steal my hoodies (give them back tho)",
    "You're proof that God has a sense of humor... and good taste! 😂",
    "If loving you is wrong, I don't want to be right (but I'm still right)",
    "You're the peanut butter to my jelly, the weird to my normal",
    
    // More loving
    "You make ordinary moments feel like magic ✨",
    "I love how your eyes light up when you talk about things you love",
    "You have the softest heart and the strongest spirit 💛",
    "Thank you for being exactly who you are, it's perfect",
    "You're my safe place in this chaotic world 🏠",
    "I choose you, every day, in every way possible",
    
    // More reassuring
    "You don't need to be perfect, just be you - that's enough",
    "Your feelings are valid, even the messy complicated ones",
    "Take your time, there's no rush to figure everything out",
    "You're allowed to rest, you've been strong for so long 💤",
    "Progress isn't always loud - quiet growth counts too 🌱",
    "You matter more than you know, especially to me",
    
    // More goofy
    "Are you made of copper and tellurium? Because you're Cu-Te! ⚛️",
    "I love you like Kanye loves Kanye (that's a lot btw)",
    "You're like sunshine, but better because you don't burn my skin",
    "If you were a fruit, you'd be a fine-apple! 🍍",
    "You're the upgrade I never knew I needed 📱",
    "I love you more than I love being right in arguments",
    
    // More funny
    "I'd fight a bear for you... okay maybe just a really small bear 🐻",
    "You're like Google - you have everything I'm searching for",
    "I love you like a fat kid loves cake (respectfully) 🍰",
    "You're the reason I believe in aliens - you're out of this world! 👽",
    "If I had a dollar for every time I thought about you, I'd be rich enough to buy you everything",
    "You're like a human version of my favorite song on repeat",
    
    // Sweet and short
    "You're my person 💕",
    "Thanks for existing ♡",
    "You're home to me 🏡",
    "Forever grateful for you ✨",
    "You're my happy place 😊",
    "Best decision I ever made? Loving you 💗",
    
    // Encouraging
    "You're capable of amazing things, I believe in you!",
    "Every small step forward is still progress 👣",
    "You've overcome so much already, this is just another mountain",
    "Your strength inspires me every single day 💪",
    "It's okay to take breaks, warriors need rest too",
    "You're writing your own incredible story, keep going ✍️",
    
    // Silly short ones
    "You're my favorite weirdo 🤪",
    "10/10 would recommend you to others",
    "You > everyone else 📊",
    "Certified cutie alert! 🚨",
    "You're like chocolate - necessary for survival 🍫",
    "Warning: may cause excessive smiling 😄",
    
    // Random mix
    "You smell nice... in a non-creepy way! 👃",
    "I love your brain and all the thoughts in it 🧠",
    "You're like a human vitamin - you make everything better",
    "Thanks for putting up with my weirdness since day one",
    "You're the plot twist in my story that I never saw coming",
    "I'd share my food with you, and that's true love 🥘",
    
    // Final batch
    "You're my favorite notification 📱",
    "Life's better with you in it, obviously ✨",
    "You're like a warm blanket for my soul 🛋️",
    "Thanks for being my personal ray of sunshine ☀️",
    "You make my heart happy, and that's science 🧪",
    "P.S. You're amazing, don't forget that! 💌",
    
    // Extra silly ones
    "You're like a human golden retriever - pure joy 🐕",
    "I love you more than I love staying in bed (that's huge!)",
    "You're the reason I wake up smiling... also coffee, but mostly you ☕",
    "If loving you is a crime, call me a repeat offender 👮‍♀️",
    "You're like pizza - even when you're bad, you're still pretty good 🍕",
    "I'd choose you even if you sang off-key in the shower 🚿",
    
    // More sweet
    "You make everything feel possible 🌟",
    "Your laugh is my favorite soundtrack 🎵",
    "You're proof that good things exist in this world 🌍",
    "Thanks for loving me even on my grumpy days 😤",
    "You're the best part of every day, hands down 🙌",
    "I love how you love - completely and without reservation 💖",
    
    // Encouraging short ones
    "You're doing great, keep going! 🎯",
    "Proud of you always 🏆",
    "You're stronger than you think 💪",
    "This too shall pass ⏳",
    "You've got a good heart ❤️",
    "Everything will be okay 🤗",
    
    // Final goofy ones
    "You're like WiFi - I can't function without you 📶",
    "Are you a parking ticket? Because you've got 'fine' written all over you! 🎫",
    "I love you like a hobbit loves second breakfast 🍳",
    "You're the cheese to my macaroni 🧀",
    "If you were a vegetable, you'd be a smart-carrot 🥕",
    "You're my emergency contact and my favorite contact 📞"
];

function getRandomMessage() {
    const messageElement = document.getElementById('messageText');
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    // Add fade out effect
    messageElement.classList.add('fade-out');
    
    setTimeout(() => {
        messageElement.textContent = messages[randomIndex];
        messageElement.classList.remove('fade-out');
        messageElement.classList.add('fade-in');
        
        // Remove fade-in class after animation
        setTimeout(() => {
            messageElement.classList.remove('fade-in');
        }, 500);
    }, 300);
    
    // Add paper shake effect
    const paper = document.querySelector('.torn-paper');
    paper.style.transform = 'rotate(-1.5deg) scale(0.98)';
    setTimeout(() => {
        paper.style.transform = 'rotate(-1.5deg) scale(1)';
    }, 200);
}

// Click anywhere on the paper to get new message
document.querySelector('.torn-paper').addEventListener('click', getRandomMessage);

// Also allow button click
document.querySelector('.new-note-btn').addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent double-triggering from paper click
    getRandomMessage();
});

// Add some randomization to the paper rotation on load
function randomizePaperRotation() {
    const paper = document.querySelector('.torn-paper');
    const randomRotation = (Math.random() - 0.5) * 4; // Random rotation between -2 and 2 degrees
    paper.style.transform = `rotate(${-1.5 + randomRotation}deg)`;
}

// Initialize with random rotation
randomizePaperRotation();

// Add subtle breathing animation to the paper
function addBreathingEffect() {
    const paper = document.querySelector('.torn-paper');
    setInterval(() => {
        paper.style.transform += ' scale(1.002)';
        setTimeout(() => {
            paper.style.transform = paper.style.transform.replace(' scale(1.002)', '');
        }, 2000);
    }, 4000);
}

// Start breathing effect after a delay
setTimeout(addBreathingEffect, 3000);
