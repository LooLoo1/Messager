import { Icon } from "korol-social-network-component-library";
import s from "./styles.module.css";

export function InputField() {
	return (
		<div className={s.field}>
			<Icon icon="mic" fill="#8A8A8F" />
			<textarea className={s.input} placeholder="Type something" />
			<div className={s.icons}>
				<Icon icon="plus" />
				<Icon icon="send" />
			</div>
		</div>
	);
}
