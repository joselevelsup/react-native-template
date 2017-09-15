import React, { Component } from "react";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Text,
  Drawer,
  Button,
  Icon,
  Tabs,
  Tab
} from 'native-base';

import Sidebar from "./sidebar";
import Tab1 from "./pages/home";
import Tab2 from "./pages/about";

export default class App extends Component{
  closeDrawer = () => {
    this.drawer._root.close();
  }

  openDrawer = () => {
    this.drawer._root.open();
  }
  render(){
    return (
      <Container>
      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<Sidebar/>}
      onClose={() => this.closeDrawer()} >
        <Header hasTabs androidStatusBarColor="#000" style={{backgroundColor: "#000"}}>
          <Left>
            <Button transparent onPress={() => this.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right/>
        </Header>
        <Tabs initialPage={0} tabStyle="#000">
          <Tab tabStyle={{backgroundColor: '#000'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#000'}} heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#000'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#000'}} heading="Tab2">
            <Tab2 />
          </Tab>
        </Tabs>
       </Drawer>
      </Container>
    )
  }
}
