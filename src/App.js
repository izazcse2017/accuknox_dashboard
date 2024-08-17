import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import AddWidget from './components/AddWidget';
import './App.css';

function App() {
    const [widgets, setWidgets] = useState([
        { id: 1, category: 'CSPM', name: 'Cloud Accounts', content: 'Connected (2), Not Connected (2)' },
        { id: 2, category: 'CSPM', name: 'Cloud Account Risk Assessment', content: 'Failed (1889), Passed (7253)' }
    ]);

    // Function to add a new widget
    const addWidget = (newWidget) => {
        setWidgets([...widgets, newWidget]);
    };

    // Function to remove a widget
    const removeWidget = (widgetId) => {
        setWidgets(widgets.filter(widget => widget.id !== widgetId));
    }; 

    return (
        <div className="App">
            <h1>CNAPP Dashboard</h1>
            <Dashboard widgets={widgets} removeWidget={removeWidget} />
            <AddWidget addWidget={addWidget} />
        </div>
    );
}

export default App;
