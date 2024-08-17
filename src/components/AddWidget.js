import React, { useState } from 'react';

function AddWidget({ addWidget }) {
    const [widgetName, setWidgetName] = useState('');
    const [widgetContent, setWidgetContent] = useState('');

    const handleAdd = () => {
        const newWidget = {
            id: Date.now(), // Unique ID based on current timestamp
            category: 'CSPM', // Default category for simplicity
            name: widgetName,
            content: widgetContent
        };
        addWidget(newWidget);
        setWidgetName('');
        setWidgetContent('');
    };

    return (
        <div className="add-widget">
            <h2>Add Widget</h2>
            <input
                type="text"
                placeholder="Widget Name"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
            />
            <textarea
                placeholder="Widget Content"
                value={widgetContent}
                onChange={(e) => setWidgetContent(e.target.value)}
            />
            <button onClick={handleAdd}>Add Widget</button>
        </div>
    );
}

export default AddWidget;
