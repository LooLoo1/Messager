import "./Chat.css";
import check from "../../shared/assets/check.svg";

function Chat() {
	return (
		<div className="chat-list">
			<div className="message your">
				<p className="text">Nothing special actually…How about this?</p>
				<div className="data">
					<span>20:10pm</span>
					<div className="message-status">
						<img src={check} alt="watching" />
						<img src={check} alt="watching" />
					</div>
				</div>
			</div>
			
		</div>
	);
}

export default Chat;
