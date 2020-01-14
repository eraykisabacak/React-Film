import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Container,
    Image,
    List,
    Segment
} from 'semantic-ui-react';

const Footer = props => {
    return (
        <div>
            <Segment inverted style={{ margin: '5em 0em 0em', padding: '2em 0em' }} vertical>
            <Container textAlign='center'>
                <Image src='https://image.flaticon.com/icons/png/512/168/168818.png' centered size='mini' />
                <List horizontal inverted divided link size='small'>
                    <List.Item as='a' href='http://eraykisabacak.com' target="_blank">
                        Eray Kısabacak
                    </List.Item>
                    <List.Item as='a' href='https://www.linkedin.com/in/eraykisabacak/' target="_blank">
                        Linkedin
                    </List.Item>
                </List>
            </Container>
        </Segment>
        </div>
    );
};

export default Footer;