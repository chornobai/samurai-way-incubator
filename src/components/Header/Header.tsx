import React from "react";
import s from "./Header.module.css";
import logo from "../../img/icon-svg/logo.svg";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { HeaderType } from "../../redux/redux-store";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

type HeaderTypeComponent = {
  links: Array<HeaderType>;
  isAuth: boolean;
  login: string;
  LoginOutTC: () => void;
};

const Header: React.FC<HeaderTypeComponent> = React.memo(
  ({ links, isAuth, login, LoginOutTC }) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
      null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
      null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
      <AppBar position="static" className={s.header}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Логотип */}
            <img src={logo} alt="Logo" width="50" height="50" />

            {/* Название для мобильных устройств */}
            <Typography
              variant="h5"
              noWrap
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "inherit",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PET.net
            </Typography>

            {/* Меню для мобильных */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", fontFamily: "inherit" },
                }}
              >
                {links.map((link) => (
                  <MenuItem
                    sx={{
                      fontFamily: "inherit",
                    }}
                    className={s.item}
                    key={link.id}
                    onClick={handleCloseNavMenu}
                    component={RouterLink}
                    to={link.link}
                  ></MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Меню для десктопа */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {links.map((link) => (
                <Button
                  key={link.id}
                  component={RouterLink}
                  to={link.link}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {link.name}
                </Button>
              ))}
            </Box>

            {/* Пользовательское меню */}
            <Box sx={{ flexGrow: 0 }}>
              {/* Авторизация */}
              {isAuth && (
                <Box
                  display="flex"
                  alignItems="center"
                  textTransform="uppercase"
                >
                  <NavLink
                    className={s.link}
                    to="/profile"
                    activeClassName={s.active}
                  >
                    {login}
                  </NavLink>
                  <NavLink
                    onClick={LoginOutTC}
                    className={s.link}
                    to="/login"
                    activeClassName={s.active}
                  >
                    Logout
                  </NavLink>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
);

export { Header };
