import "./SendMesage.css";
import microfon from "../../shared/assets/mic.svg";
import plus from "../../shared/assets/plus.svg";
import send from "../../shared/assets/send.svg";

function SendMesage() {
	return (
		<div className="send">
			<div className="cont">
				<img src={microfon} alt="button microfon" className="" />
				<form className="">
					<textarea className="send-message" placeholder="Type something" />
				</form>
				<div className="send-types">
					<img src={plus} alt="button plus" className="item" />
					<img src={send} alt="button send" className="item" />
				</div>
			</div>
		</div>
	);
}

export default SendMesage;
