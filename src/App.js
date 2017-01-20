import React, { Component } from 'react';
import View from './components/View/View';
import ScrollView from './components/ScrollView/ScrollView';
import Link from './components/Link/Link';
import { List, ListItem } from './components/List/List';
import Group from './components/Group/Group';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import { Radio } from './components/Radio/Radio';

const UserIcon = (props) => <svg width="29" height="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="29" height="29" rx="7" fill={props.color} /></svg>
const getIcon = color => <UserIcon color={color} />;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'main'
    };
  }

  changePanelHandler(panelId) {
    return () => {
      document.querySelector('#' + panelId).scrollTop = 0;
      this.setState({ activePanel: panelId })
    };
  }

  componentDidMount() {
    document.documentElement.addEventListener('touchstart', function (event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    }, false);
  }

  render() {
    return (
      <View activePanel={this.state.activePanel}>

        <ScrollView id="main">

          <Group title="Layouts">
            <List>
              <ListItem expandable={true} onClick={this.changePanelHandler('lists')}>List</ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('groups')}>Group</ListItem>
            </List>
          </Group>

          <Group title="Controls">
            <List>
              <ListItem expandable={true} onClick={this.changePanelHandler('buttons')}>Button</ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('checkboxes')}>Checkbox</ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('radios')}>Radio</ListItem>
            </List>
          </Group>

          <Group>
            <List>
              <ListItem expandable={true} onClick={this.changePanelHandler('demo')}>Demo</ListItem>
            </List>
          </Group>

        </ScrollView>

        <ScrollView id="lists">

          <Group title="Simple list">
            <List>
              <ListItem>Label 1</ListItem>
              <ListItem>Label 2</ListItem>
              <ListItem>Label 3</ListItem>
            </List>
          </Group>

          <Group title="Expandable">
            <List>
              <ListItem expandable={true} onClick={this.changePanelHandler('nothing')}>Label 1</ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('nothing')}>Label 2</ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('nothing')}>Label 3</ListItem>
            </List>
          </Group>

          <Group title="Indicator">
            <List>
              <ListItem expandable={true} onClick={this.changePanelHandler('nothing')} indicator="Indicator">Feature 1</ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('nothing')} indicator="Off">Feature 2</ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('nothing')} indicator="On">Feature 3</ListItem>
            </List>
          </Group>

          <Group title="Icons">
            <List>
              <ListItem icon={getIcon('#4CD964')}>Label 1</ListItem>
              <ListItem icon={getIcon('#4CD964')}>Label 2</ListItem>
              <ListItem icon={getIcon('#4CD964')}>Label 3</ListItem>
            </List>
          </Group>

          <Group>
            <Button
              appearance="primary"
              alignment="center"
              onClick={this.changePanelHandler('main')}
            >
              Back
            </Button>
          </Group>

        </ScrollView>

        <ScrollView id="groups">

          <Group title="Group title" description="Group description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.">
            <List>
              <ListItem>Group content</ListItem>
            </List>
          </Group>

          <Group>
            <Button
              appearance="primary"
              alignment="center"
              onClick={this.changePanelHandler('main')}
            >
              Back
            </Button>
          </Group>

        </ScrollView>

        <ScrollView id="buttons">

          <Group title="Appearance">
            <Button appearance="default" onClick={() => {}}>Default button</Button>
            <Button appearance="primary" onClick={() => {}}>Primary button</Button>
            <Button appearance="danger" onClick={() => {}}>Danger button</Button>
            <Button disabled onClick={() => {}}>Disabled button</Button>
          </Group>

          <Group title="Alignment">
            <Button alignment="left" onClick={() => {}}>Button</Button>
            <Button alignment="center" onClick={() => {}}>Button</Button>
            <Button alignment="right" onClick={() => {}}>Button</Button>
          </Group>

          <Group>
            <Button
              appearance="primary"
              alignment="center"
              onClick={this.changePanelHandler('main')}
            >
              Back
            </Button>
          </Group>

        </ScrollView>

        <ScrollView id="checkboxes">

          <Group title="Checkboxes">
            <List>
              <ListItem
                asideContent={<Checkbox checked="checked" />}
              >
                Checked
              </ListItem>
              <ListItem
                asideContent={<Checkbox />}
              >
                Unchecked
              </ListItem>
              <ListItem
                asideContent={<Checkbox disabled="disabled" />}
              >
                Disabled
              </ListItem>
            </List>
          </Group>

          <Group>
            <Button
              appearance="primary"
              alignment="center"
              onClick={this.changePanelHandler('main')}
            >
              Back
            </Button>
          </Group>

        </ScrollView>

        <ScrollView id="radios">

          <Group title="Radios">
            <List>
              <Radio name="radio" value="1">First</Radio>
              <Radio name="radio" value="2">Second</Radio>
              <Radio name="radio" value="3">Third</Radio>
            </List>
          </Group>

          <Group>
            <Button
              appearance="primary"
              alignment="center"
              onClick={this.changePanelHandler('main')}
            >
              Back
            </Button>
          </Group>

        </ScrollView>

        <ScrollView id="demo">

          <Group title="Settings" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quod vel, possimus reiciendis tempora explicabo omnis error veritatis dolore officia maiores quia adipisci quos beatae voluptas at ipsa pariatur repellat.">
            <List>

              <ListItem
                icon={getIcon('#FF9500')}
                asideContent={<Checkbox />}
              >
                Airplane Mode
              </ListItem>

              <ListItem
                icon={getIcon('#007AFF')}
                expandable={true}
                indicator="Philip's Wi-Fi Network"
                 onClick={this.changePanelHandler('nothing')}
              >
                Wi-Fi
              </ListItem>

              <ListItem icon={getIcon('#007AFF')} expandable={true} onClick={this.changePanelHandler('nothing')} indicator="On">
                Bluetooth
              </ListItem>
              <ListItem icon={getIcon('#4CD964')} expandable={true} onClick={this.changePanelHandler('nothing')}>
                Cellular
              </ListItem>
              <ListItem icon={getIcon('#4CD964')} expandable={true} onClick={this.changePanelHandler('nothing')} indicator="Off">
                Personal Hotspot
              </ListItem>
              <ListItem icon={getIcon('#007AFF')} expandable={true} onClick={this.changePanelHandler('nothing')} indicator="Not connected">
                VPN
              </ListItem>
              <ListItem icon={getIcon('#4CD964')} expandable={true} onClick={this.changePanelHandler('nothing')} indicator="EE">
                Carrier
              </ListItem>
            </List>
          </Group>

          <Group>
            <Button
              appearance="primary"
              alignment="center"
              onClick={this.changePanelHandler('main')}
            >
              Back
            </Button>
          </Group>

        </ScrollView>

        <ScrollView id="nothing">
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '0 0 auto', color: 'gray', textAlign: 'center' }}>
              Here is nothing<br />
              <span onClick={this.changePanelHandler('main')} style={{ textDecoration: 'underline' }}>Back to start screen</span>
            </div>
          </div>
        </ScrollView>

      </View>
    );
  }
}

const Log = (props) => (
  <dl>
    <dt>Panel: </dt>
    <dd>{props.panel}</dd>
  </dl>
);

// External — without animation
// Internal — use animation