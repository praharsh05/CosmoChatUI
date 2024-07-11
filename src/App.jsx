import { useState, React } from 'react';
import './styles/App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, Message, MessageList, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';


const OPEN_AI_KEY = process.env.REACT_APP_OPEN_API_KEY;
console.log("API Key: ", OPEN_AI_KEY);
function App() {
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGPT",
      sender: "ChatGPT",
      direction: "incoming"
    }
  ])

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }

    const newMessages = [...messages, newMessage]; // all old message + new messages

    // update our message state
    setMessages(newMessages);

    // set a typing indicator
    setTyping(true);

    //process message to chatGPT
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages){
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT"){
        role = "assistant"
      } else {
        role = "user"
      }
      return { role: role, content: messageObject.message}
    })

    const systemMessage = {
      role: "system",
      content: "Speak like a Scot"
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo-1106",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + OPEN_AI_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages(
        [...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT",
          direction: "incoming"
        }]
      );
      setTyping(false);
    })
  }

  return (
    <div className="App">
      <div style={{ position:"relative", height:"800px", width:"700px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message}/>
              })}
            </MessageList>
            <MessageInput placeholder='Type Message Here!' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
