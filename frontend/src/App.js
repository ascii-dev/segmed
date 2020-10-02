import React, { Component } from 'react';
import {
  Row,
  Col,
  Divider,
  Layout,
  Breadcrumb,
  Typography,
  Card,
  Badge,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';

import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Meta } = Card;

class App extends Component {
  componentDidMount() {

  }
  composeCard = (url, description, user) => (
    <Card
      hoverable
      cover={<img alt={description} src={url} />}
      actions={[
        <EditOutlined key="tag" />,
      ]}
    >
      <Meta title={description} description={`Uploaded by ${user}`} />
    </Card>
  );

  composeTagged = (url, description, user) => (
    <Badge.Ribbon text="Tagged">
      {
        this.composeCard(
          url,
          description,
          user,
        )
      }
    </Badge.Ribbon>
  );
  render() {
    return (
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo">
              <Title level={4} color={'white'}>SEGMED</Title>
            </div>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Images</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
            <Divider orientation="left">Images</Divider>
              <Row justify="center" align="top" gutter={16}>
                <Col span={4}>
                  {
                    this.composeTagged(
                      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                      "image alt description",
                      "Food Photographer David Fedulov",
                    )
                  }
                </Col>
                <Col span={4}>
                  {
                    this.composeCard(
                      "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                      "image alt description",
                      "Food Photographer David Fedulov",
                    )
                  }
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>SegMed Images Project ©2020 Created by Samuel Raphael</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
