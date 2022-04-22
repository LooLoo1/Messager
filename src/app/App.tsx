import React from "react";
import "./App.css";
import ChatNav from "../components/ChatNav/ChatNav";
import Chat from "../components/Chat/Chat";
import SendMesage from "../components/SendMesage/SendMesage";

function App() {
	return (
		<div className="chat">
			<ChatNav />
			<Chat />
			<SendMesage />
		</div>
	);
}

export default App;
