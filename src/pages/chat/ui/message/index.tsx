import { Icon } from "korol-social-network-component-library";
import React from "react";
import s from "./styles.module.css";
type MessageStatysT = "read" | "sending" | "sended";

type PropsT = {
	isMy: boolean;
	status?: MessageStatysT;
};

export const Message = ({ isMy, status = "sending" }: PropsT) => {
	const statusMessage = {
		read: <Icon icon="check" size={14} />,
		sending: <Icon icon="question" fill="#C8C7CC" size={14} />,
		sended: <Icon icon="check" size={14} />,
	}[status] || <></>;

	return (
		<div className={s.messageWrapper} style={{ justifyContent: isMy ? "flex-end" : "flex-start" }}>
			<div className={s.message}>
				<div
					className={isMy ? s.container + " " + s.myContainer : s.container}
					style={{ color: isMy ? "#fff" : "#000" }}>
					<p className={s.authorName}>Jon</p>
					<p className={s.text}>Nothing special actually…How about this?</p>
				</div>

				<div className={s.info}>
					<span className={s.date}>20:10pm</span>
					{statusMessage}
				</div>
			</div>
		</div>
	);
};
