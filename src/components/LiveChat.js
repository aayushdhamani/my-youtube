import React, { useEffect,useState } from "react";
import ChatMessage from "./ChatMessage";
import { addmessage } from "../utls/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, generateRandomString } from "../utls/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addmessage({
          name: generateRandomName(),
          message: generateRandomString(10) + "❤",
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
    <div className="w-full h-[600px] p-2 mx-2 px-2 border border-gray-500 rounded-lg bg-slate-200 overflow-y-scroll flex flex-col-reverse">
      {
        // Disclaimer: Don't use indexes as keys

        chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))
      }
    </div>
    <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addmessage({
              name: "Akshay Saini",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-80"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
    
  );
};

export default LiveChat;
