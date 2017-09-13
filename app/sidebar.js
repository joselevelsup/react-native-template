import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  List,
  ListItem
} from 'native-base';

export default class Sidebar extends Component {
  render() {
    let items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    return (
      <Container>
        <Content style={{backgroundColor:'#FFFFFF'}}>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}
