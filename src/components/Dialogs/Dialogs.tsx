import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { DialogType, DialogMessagesType, ActionTypes } from '../../redux/store';
import { addSMSAC, changeSMSAC } from '../../redux/dialog-reducer';
type DialogsTypeComponent = {
	dialogsName: Array<DialogType>;
	dialogsMessages: Array<DialogMessagesType>
	newSms: string
	dispatch: (action: ActionTypes) => void
};

const Dialogs: React.FC<DialogsTypeComponent> = (props) => {

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

	const onChangeSms = (event: ChangeEvent<HTMLTextAreaElement>) => {
		let newSMSValue = event.currentTarget.value
		props.dispatch(changeSMSAC(newSMSValue))
	}
	const onClickSend = () => {
		props.dispatch(addSMSAC(props.newSms))
	}


	return (

		<section className={s.dialogs}>
			<ul className={s.dialog}>
				{dialogItems}
			</ul>
			<ul className={s.messages}>
				{dialogMessageItem}
			</ul>
			<div className={s.messages_area}><textarea value={props.newSms} onChange={onChangeSms} name="dialog" id="dialogSend" ></textarea>
				<button onClick={onClickSend}>Send</button>
			</div>
		</section>
	);
}

export { Dialogs };
