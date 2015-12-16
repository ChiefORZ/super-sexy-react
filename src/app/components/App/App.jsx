import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Super Sexy React</h2>
                <h4>ヾ(。⌒∇⌒) ノ Only one compiler and fast to the max └（★ｏ★）┐ (>'-') ></h4>
                <p>
                    <Link to="/">Home</Link>
                </p>
                <p>
                    <Link to="/dashboard">Dashboard</Link>
                </p>
                <p>
                    <Link to="/async">Async Component</Link>
                </p>
                { this.props.children }
            </div>
        );
    }
}

export default App;
