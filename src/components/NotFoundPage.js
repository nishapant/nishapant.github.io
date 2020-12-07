import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <Title strong style={{ fontSize: "50px", border: "black solid 1px", textAlign: "center" }}>Nisha Pant</Title>
            </div>
        );
    }
  }

  export default NotFoundPage;