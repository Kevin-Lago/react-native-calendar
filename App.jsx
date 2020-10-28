import React from 'react';
import { Text, View, Animated, TouchableWithoutFeedback } from 'react-native';
import styles from './Styles';
import TodoList from './components/todoList/TodoList';
import Calendar from './components/calendar/Calendar';
import Fox from './components/icons/Fox';
import MenuButton from './components/icons/MenuButton';

const AppNav = (props) => (
  <View style={styles.appNav}>
    <Text style={styles.title}>
      {props.feature}
    </Text>
    {/* <Animated.View styles={styles.menuButton} />
    <TouchableWithoutFeedback onPress={props.toggleMenu} style={styles.menuButton}>
      <MenuButton />
    </TouchableWithoutFeedback> */}
  </View>
);

const Menu = (props) => (
  <Animated.View >
    <View style={styles.menu}>

    </View>
  </Animated.View>
);

class App extends React.Component {
  // TODO: Add different features
  // handle changing to each
  state = {
    feature: "Calendar",
    isMenuOpen: false
  }

  toggleMenu = () => {
    console.log("here");
  }

  render() {
    return (
      <View style={styles.screen}>
        <AppNav feature={this.state.feature} toggleMenu={this.toggleMenu} />
        <View style={styles.content}>
          <Calendar />
        </View>
        <Fox />
      </View>
    );
  }

};

export default App;
