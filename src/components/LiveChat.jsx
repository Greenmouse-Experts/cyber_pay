import { LiveChatWidget } from "@livechat/widget-react";

const LiveChat =  () => {
  function handleNewEvent(event) {
    console.log("LiveChatWidget.onNewEvent", event);
  }

  return (
    <LiveChatWidget
    license="10840582" 
      visibility="maximized"
      onNewEvent={handleNewEvent}
    />
  );
}

export default LiveChat;
