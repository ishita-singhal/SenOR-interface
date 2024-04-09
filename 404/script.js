function sendMessageOnEnter(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent the default behavior of Enter (new line)
      sendMessage();
    }
  }
  
  function sendMessage() {
    const userInput = document.getElementById("inputMessage").value;
    if (userInput.trim() === "") return;
  
    const chatlogs = document.getElementById("chatlogs");
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = `<strong>👨🏻‍🦰You:</strong> ${userInput}`;
    chatlogs.appendChild(userMessage);
  
    // Replace the following line with your chatbot logic to generate a response
    const botResponse = `<strong>🤖Chatbot:</strong> This is a simple chatbot response.`;
  
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerHTML = botResponse;
    chatlogs.appendChild(botMessage);
  
    document.getElementById("inputMessage").value = "";
    document.getElementById("inputMessage").style.height = 'auto'; // Reset textarea height after sending
    chatlogs.scrollTop = chatlogs.scrollHeight;
  }
  
  function adjustTextareaHeight() {
    const textarea = document.getElementById('inputMessage');
    textarea.style.height = 'auto'; // Reset height to auto to calculate the actual scrollHeight
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scrollHeight
  }
    
  const slider = document.getElementById("tokenLength");
  const sliderValue = document.getElementById("tokenValue");

  // Update the slider value on input change
  slider.addEventListener("input", function() {
    sliderValue.textContent = this.value;
  });

  const slider1 = document.getElementById("temperature");
  const sliderValue1 = document.getElementById("tempValue");

  // Update the slider value on input change
  slider1.addEventListener("input", function() {
    sliderValue1.textContent = this.value;
  });

  