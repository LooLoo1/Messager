import React from "react";
import s from "./styles.module.css";
import { Header, InputField, Message } from "./ui";

const Chat = () => {
	return (
		<div className={s.chat}>
			<Header />
			<div>
				<Message isMy={true} />
			</div>
			<InputField />
		</div>
	);
};

export default Chat;
