import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertDismissible(props) {
    const [show, setShow] = useState(true);

    if (show) {
        return(
            <Alert variant="success" onClose={() => setShow(false)} dismissible>{props.message}</Alert>
        )
    }
    return null; 
}

export default AlertDismissible;