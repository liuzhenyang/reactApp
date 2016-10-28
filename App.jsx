import React from 'react';

class App extends React.Component {
    render() {
        let i=1;
        return (
            <div>
                <h1>Hello World!!!</h1>
                <h2>欢迎来到菜鸟教程学习！！！</h2>
                <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
                <p>{1+1}{i==1?'True':'false'}</p>
            </div>
        );
    }
}

export default App;