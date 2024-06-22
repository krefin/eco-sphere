import { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .ibm-full-page-wrapper {
    height: 100vh;
    overflow: hidden;
  }
`;

const WatsonAssistantChat = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "7eac2910-2703-4afe-97f4-584cdf846f00",
      region: "us-south",
      serviceInstanceID: "c3c7551f-3af7-4be7-9705-a38c19831d20",
      namespace: "my-unique-namespace",
      onLoad: async (instance) => { await instance.render(); }
    };

    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    t.setAttribute('async', 'true');
    document.head.appendChild(t);

    return () => {
      document.head.removeChild(t);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <div id="ibm-web-chat-container"></div>
    </>
  );
};

export default WatsonAssistantChat;
