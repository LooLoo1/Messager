import { Avatar, Header as HeaderUI, Icon } from "korol-social-network-component-library";
import s from "./styles.module.css";

export function Header() {
	return (
		<HeaderUI background="white">
			<HeaderUI.Slot side="left">
				<Icon icon="back" size={24} />
				<div className={s.conversation}>
					<Avatar model="avatar" shape="circle" size={32} />
					<div className={s.description}>
						<p className={s.conversationName}>Some Conversation</p>
						<p className={s.members}> Jon, Some, Some </p>
					</div>
				</div>
			</HeaderUI.Slot>
			<HeaderUI.Slot side="right">
				<Icon icon="phone" size={24} />
				<Icon icon="search" size={24} />
			</HeaderUI.Slot>
		</HeaderUI>
	);
}
