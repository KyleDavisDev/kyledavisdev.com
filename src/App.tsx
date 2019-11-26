import * as React from "react";
import * as ReactDOM from "react-dom";

export class App extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <span>yo</span>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
