import "./index.css";
import { useState, useEffect } from "react";

const Message = ({ senderUser, messages }) => {
	const localUser = JSON.parse(localStorage.getItem("user"));

	useEffect(() => {
		console.log("estoy en message");
	}, []);

	return (
		<>
			{messages.map((message, index) => (
				<div
					key={index}
					className={
						senderUser.name === message.User.name
							? "message__content__text masna"
							: "message__content__text"
					}
				>
					<div className='message__content__image'>
						<img
							width={45}
							src={
								senderUser.name === message.User.name
									? localUser.profile_url
									: senderUser.profile_url
							}
						/>
					</div>
					<div className='message__content__message'>
						<p className='c__name'>
							{senderUser.name === message.User.name
								? localUser.name
								: senderUser.name}
						</p>
						<p className='c__message'>{message.message}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default Message;
