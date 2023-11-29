import React from "react";
import s from "./Header.module.css";
import logo from "../../img/icon-svg/logo.svg";
import { NavLink } from "react-router-dom";
import { HeaderType } from "../../redux/store";
type HeaderTypeComponent = {
	links: Array<HeaderType>;
};

const Header = (props: HeaderTypeComponent) => {
	let headerItems = props.links.map((i) => {
		return (
			<li className={s.item} key={i.id}>
				<NavLink activeClassName={s.active} className={s.link} to={i.link}>
					{i.name}
				</NavLink>
			</li>
		);
	});

	return (
		<header className={s.header}>
			<img src={logo} alt="logo" width="50" height="50" />
			<nav className={s.nav}>
				<ul className={s.list}>{headerItems}</ul>
			</nav>
		</header>
	);
};

export { Header };
