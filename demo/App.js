import React, { Component } from 'react';

import {
  View,
  ScrollView,
  Group,
  List,
  ListItem,
  FormLayout,
  Button,
  Checkbox,
  Radio,
  Slider,
  Input,
  Textarea,
  File,
  Select,
  Icon,
  Spinner
} from '../src';

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

  pullHandler() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  render() {
    return (
      <View activePanel={this.state.activePanel} header={true}>

        <ScrollView id="main" header={{ title: 'VKUI' }}>

          <Group title="Layouts">
            <List>
              <ListItem expandable={true} onClick={this.changePanelHandler('lists')}>
                List
              </ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('groups')}>
                Group
              </ListItem>
            </List>
          </Group>

          <Group title="Controls">
            <List>
              <ListItem expandable={true} onClick={this.changePanelHandler('inputs')}>Input</ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('buttons')}>Button</ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('checkboxes')}>Checkbox</ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('radios')}>Radio</ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('selects')}>Select</ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('slider')}>Slider</ListItem>
            </List>
          </Group>

          <Group title="Utils">
            <List>
              <ListItem expandable={true} onClick={this.changePanelHandler('spinners')}>
                Spinner
              </ListItem>
              <ListItem expandable={true} onClick={this.changePanelHandler('pull2refresh')}>
                Pull to refresh
              </ListItem>
            </List>
          </Group>

          <Group>
            <List>
              <ListItem expandable={true} onClick={this.changePanelHandler('demo')}>Demo</ListItem>
            </List>
          </Group>

        </ScrollView>

        <ScrollView id="lists"  header={{ title: 'Lists' }}>

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
              <ListItem icon={<Icon />}>Label 1</ListItem>
              <ListItem icon={<Icon />}>Label 2</ListItem>
              <ListItem icon={<Icon />}>Label 3</ListItem>
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

        <ScrollView id="groups" header={{ title: 'Groups' }}>

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

        <ScrollView id="buttons" header={{ title: 'Buttons' }}>

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

        <ScrollView id="checkboxes"  header={{ title: 'Checkboxes' }}>

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

        <ScrollView id="radios" header={{ title: 'Radios' }}>

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

        <ScrollView id="spinners" header={{ title: 'Spinner' }}>

          <div style={{ display: 'flex', width: '100%', height: 200 }}>
            <div style={{ flex: '1 0 auto', height: 200 }}><Spinner size={80} /></div>
            <div style={{ flex: '1 0 auto', height: 200 }}><Spinner size={40} /></div>
            <div style={{ flex: '1 0 auto', height: 200 }}><Spinner /></div>
          </div>

          <div style={{ display: 'flex', width: '100%', height: 200, background: '#222' }}>
            <div style={{ flex: '1 0 auto', height: 200 }}><Spinner color="#fff" size={80} /></div>
            <div style={{ flex: '1 0 auto', height: 200 }}><Spinner color="#fff" size={40} /></div>
            <div style={{ flex: '1 0 auto', height: 200 }}><Spinner color="#fff" /></div>
          </div>

          <div style={{ display: 'flex', width: '100%', height: 200 }}>
            <div style={{ flex: '1 0 auto', height: 200 }}><Spinner on={false} progress={50} /></div>
            <div style={{ flex: '1 0 auto', height: 200 }}><Spinner on={false} progress={75} /></div>
            <div style={{ flex: '1 0 auto', height: 200 }}><Spinner on={false} progress={100} /></div>
          </div>

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

        <ScrollView
          id="pull2refresh"
          header={{ title: 'pull2refresh' }}
          onPullTop={this.pullHandler}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas non incidunt ullam optio. Quam laborum aut amet, nihil illo quas, iste ratione omnis commodi eveniet hic nemo nulla in unde.
          </p>
          <p>Earum omnis hic molestias et, illo expedita aperiam illum voluptate perferendis nemo dolor, enim, at laboriosam quia! Magni tempora tempore, aliquam incidunt quia repellat ullam error, alias adipisci, distinctio animi.
          </p>
          <p>Qui nobis recusandae assumenda eius adipisci! Quos illo rem eum unde provident aspernatur numquam eligendi rerum deleniti animi, repudiandae nam molestiae similique quis, a consequuntur? Ex suscipit officia, fugiat mollitia!
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas non incidunt ullam optio. Quam laborum aut amet, nihil illo quas, iste ratione omnis commodi eveniet hic nemo nulla in unde.
          </p>
          <p>Earum omnis hic molestias et, illo expedita aperiam illum voluptate perferendis nemo dolor, enim, at laboriosam quia! Magni tempora tempore, aliquam incidunt quia repellat ullam error, alias adipisci, distinctio animi.
          </p>
          <p>Qui nobis recusandae assumenda eius adipisci! Quos illo rem eum unde provident aspernatur numquam eligendi rerum deleniti animi, repudiandae nam molestiae similique quis, a consequuntur? Ex suscipit officia, fugiat mollitia!
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas non incidunt ullam optio. Quam laborum aut amet, nihil illo quas, iste ratione omnis commodi eveniet hic nemo nulla in unde.
          </p>
          <p>Earum omnis hic molestias et, illo expedita aperiam illum voluptate perferendis nemo dolor, enim, at laboriosam quia! Magni tempora tempore, aliquam incidunt quia repellat ullam error, alias adipisci, distinctio animi.
          </p>
          <p>Qui nobis recusandae assumenda eius adipisci! Quos illo rem eum unde provident aspernatur numquam eligendi rerum deleniti animi, repudiandae nam molestiae similique quis, a consequuntur? Ex suscipit officia, fugiat mollitia!
          </p>
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

        <ScrollView id="demo" header={{ title: 'Demo' }}>

          <Group title="Settings" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quod vel, possimus reiciendis tempora explicabo omnis error veritatis dolore officia maiores quia adipisci quos beatae voluptas at ipsa pariatur repellat.">
            <List>

              <ListItem
                icon={<Icon />}
                asideContent={<Checkbox />}
              >
                Airplane Mode
              </ListItem>

              <ListItem
                icon={<Icon />}
                expandable={true}
                indicator="Philip's Wi-Fi Network"
                 onClick={this.changePanelHandler('nothing')}
              >
                Wi-Fi
              </ListItem>

              <ListItem icon={<Icon />} expandable={true} onClick={this.changePanelHandler('nothing')} indicator="On">
                Bluetooth
              </ListItem>
              <ListItem icon={<Icon />} expandable={true} onClick={this.changePanelHandler('nothing')}>
                Cellular
              </ListItem>
              <ListItem icon={<Icon />} expandable={true} onClick={this.changePanelHandler('nothing')} indicator="Off">
                Personal Hotspot
              </ListItem>
              <ListItem icon={<Icon />} expandable={true} onClick={this.changePanelHandler('nothing')} indicator="Not connected">
                VPN
              </ListItem>
              <ListItem icon={<Icon />} expandable={true} onClick={this.changePanelHandler('nothing')} indicator="EE">
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

        <ScrollView id="inputs" header={{ title: 'Inputs' }}>

          <Group title="Simple inputs">
            <FormLayout>
              <Input type="text" placeholder="Your login" />
              <Input type="password" placeholder="Your password" />
            </FormLayout>
          </Group>

          <Group title="Date and time">
            <FormLayout>
              <Input type="date" placeholder="1 янв. 2017 г." label="Date" />
              <Input type="datetime-local" placeholder="Local datetime" label="Local datetime" />
              <Input type="time" placeholder="Time" label="Time" />
              <Input type="month" placeholder="Month" label="Month" />
            </FormLayout>
          </Group>

          <Group title="Other">
            <FormLayout>
              <Input type="email" placeholder="E-mail" label="E-mail" />
              <Input type="url" placeholder="URL" label="URL" />
              <Input type="tel" placeholder="Phone" label="Phone" />
              <Input type="number" placeholder="Number" label="Number" />
              <Textarea placeholder="Textarea" />
            </FormLayout>
          </Group>

          <Group title="File">
            <File />
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

        <ScrollView id="selects" header={{ title: 'Selects' }}>

          <Group title="Native selects">
            <FormLayout>
              <Select label="Children">
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </Select>
              <Select label="Props" options={['One', 'Two', 'Three']} />
            </FormLayout>
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

        <ScrollView id="slider" header={{ title: 'Slider' }}>

          <Slider />

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

        <ScrollView id="nothing" header={{ title: 'Nothing' }}>
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
