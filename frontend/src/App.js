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
  message,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';
import axios from "axios";

import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Meta } = Card;

class App extends Component {
  state = {
    images: [],
  }

  componentDidMount() {
    this.loadImages();
  }

  loadImages = async () => {
    const promise = await axios.get("http://localhost:8000/api/images/");
    const status = promise.status;
    if (status === 200) {
      const data = promise.data;
      this.setState({ images: data });
    }
  }

  composeCard = (url, description, user, tagged, id) => (
    <Card
      hoverable
      cover={<img alt={description} src={url} />}
      actions={
        !tagged
          ? [
              <EditOutlined
                key="tag"
                onClick={() => this.handleTag(id)}
              />
            ]
          : []}
    >
      <Meta title={description} description={`Uploaded by ${user}`} />
    </Card>
  );

  composeTagged = (url, description, user, tagged, id) => (
    <Badge.Ribbon text="Tagged">
      {
        this.composeCard(
          url,
          description,
          user,
          tagged,
          id,
        )
      }
    </Badge.Ribbon>
  );

  handleTag = async (imageId) => {
    const promise = await axios.patch(`http://localhost:8000/api/images/${imageId}/tag/`);
    const status = promise.status;
    if (status === 200) {
      this.loadImages();
      message.success("Image tagged successfully");
    }
  }

  render() {
    const { images } = this.state;
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
              <Row gutter={[16, 24]}>
                {
                  images && images.length > 0
                  ? (images.map(image =>
                      (image.tagged)
                      ? (
                          <Col className="gutter-row" span={4} key={image.id}>
                            {
                              this.composeTagged(
                                image.details.urls.raw,
                                image.details.alt_description,
                                image.details.user.username,
                                image.tagged,
                                image.id,
                              )
                            }
                          </Col>
                        )
                      : (
                          <Col className="gutter-row" span={4} key={image.id}>
                            {
                              this.composeCard(
                                image.details.urls.raw,
                                image.details.alt_description,
                                image.details.user.username,
                                image.tagged,
                                image.id,
                              )
                            }
                          </Col>
                      )
                  ))
                  : ('No images in database')
                }
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
