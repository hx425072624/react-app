import React from "react";
import { ThemeContext, themes } from "./ThemeContext";
import ThemedButton from "./ThemedButton";

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    });
  }
  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton>default theme</ThemedButton> 
        </div>
      </div>
    );
  }
}
export default Theme;
