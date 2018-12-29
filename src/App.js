import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card>
            {(user) => user === null
              ? 'g'
              : (
                <div>
                  <h1>{user.name}</h1>
                  <p>{user.email}</p>
                </div>
              )
            }
          </Card>
        </header>
      </div>
    );
  }
}

export default App;
