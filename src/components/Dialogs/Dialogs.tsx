import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { DialogType, DialogMessagesType} from '../../redux/store';
type DialogsTypeComponent = {
	dialogsName: Array<DialogType>;
	dialogsMessages:Array<DialogMessagesType>
};

const Dialogs:React.FC<DialogsTypeComponent> = (props) => {

	let dialogItems = props.dialogsName.map((item: DialogType) => {
		return (
			<li className={s.dialogitem} key={item.id}><NavLink className={s.link} activeClassName={s.active} to={'/dialogs/' + item.path}>{item.name}</NavLink></li>
		)

	})

	let dialogMessageItem = props.dialogsMessages.map((item: DialogMessagesType) => {
		return (
			<li className={s.dialogMessagetem} key={item.id}>{item.message}</li>
		)

	})

	return (

		<section className={s.dialogs}>
			<ul className={s.dialog}>
				{dialogItems}
			</ul>
			<ul className={s.messages}>
				{dialogMessageItem}
			</ul>

		</section>
	);
}

export { Dialogs };
