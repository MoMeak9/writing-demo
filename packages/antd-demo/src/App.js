import React, {useCallback, useState} from 'react';
import './App.css';
import {List} from "antd";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

function App() {
    const [activeIndex, setActiveIndex] = useState(-1)
    return (
        <div className={"main"}>
            <div className={"list"}>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item
                            className={index === activeIndex ? "active" : ""}
                            onClick={() => {
                                setActiveIndex(index)
                            }}>{item}</List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default App;
