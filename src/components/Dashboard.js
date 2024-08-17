import React from 'react';

function Dashboard({ widgets, removeWidget }) {
    return (
        <div className="dashboard">
            {widgets.map(widget => (
                <div key={widget.id} className="widget">
                    <h3>{widget.name}</h3>
                    <p>{widget.content}</p>
                    <button onClick={() => removeWidget(widget.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;
