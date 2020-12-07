import React from 'react';
import { Typography } from 'antd';

import '../style/Name.css'

const { Title } = Typography;

class Name extends React.Component {
    render() {
        return (
            <div>
                <Title strong className="title">Nisha Pant</Title>
            </div>
        );
    }
}

export default Name;