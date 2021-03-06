import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {fixedMenuStyle, menuStyle} from "../helpers/styleHelper";
import { Container, Visibility, Menu, Image } from 'semantic-ui-react';

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    };

    stickTopMenu = () => this.setState({ menuFixed: true });
    unStickTopMenu = () => this.setState({ menuFixed: null });

    render(){
        const { menuFixed } = this.state;
        return(
            <div>
            <Visibility
                onBottomPassed={this.stickTopMenu}
                onBottomVisible={this.unStickTopMenu}
                once={false}
            >
                <Menu
                    borderless
                    fixed={menuFixed ? 'top' : undefined}
                    style={menuFixed ? fixedMenuStyle : menuStyle}
                >
                    <Container text>
                        <Menu.Item as={NavLink} to='/' exact>
                            <Image size='mini' src='https://image.flaticon.com/icons/png/512/168/168818.png' />
                            <Menu.Item header>Movie App</Menu.Item>
                        </Menu.Item>
                        <Menu.Item as={NavLink} to='/movies' exact>
                            Movies
                        </Menu.Item>
                        <Menu.Item as={NavLink} to='/movies/new' exact>
                            Yeni Film Ekle
                        </Menu.Item>
                    </Container>
                </Menu>
            </Visibility>
            </div>
        );
    }
};

export default Header;
