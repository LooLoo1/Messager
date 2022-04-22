import avatar from "../../shared/assets/12.png";
import arrowLeft from "../../shared/assets/arrowBack.svg";
import phone from "../../shared/assets/phone.svg";
import search from "../../shared/assets/search.svg";
import "./ChatNav.css";

function ChatNav() {
	return (
		<div className="chat-nav">
			<div className="cont">
				<img src={arrowLeft} alt="button back" className="arrow-back" />
				<div className="chat-user">
					<div className="avatar">
						<img src={avatar} alt="avatar" />
					</div>
					<span className="name">LooLoo</span>
				</div>
				<div className="tint-right">
					<img src={phone} alt="button phone" className="item" />
					<img src={search} alt="button search" className="item" />
				</div>
			</div>
		</div>
	);
}

export default ChatNav;
