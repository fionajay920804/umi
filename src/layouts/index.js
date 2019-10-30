import { Layout, Menu } from "antd";
import Link from "umi/link";
import styles from "./index.css";
import React, { Component } from "react";
import { Icon, Badge, Dropdown } from "antd";
import { connect } from "dva";

const { Header, Footer, Content } = Layout;

@connect(state => ({
  count: state.cart.length,
  cart: state.cart
}))
export default class extends Component {
  onItemClick = item => {
    console.log(item);
  };
  render() {
    const selectedKeys = [this.props.location.pathname];
    const menu = (
      <Menu>
        {this.props.cart.map((item, index) => (
          <Menu.Item key={index}>
            {item.name}×{item.count} <span>￥{item.count * item.price}</span>
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <Layout>
        {/* Header */}
        <Header className={styles.header}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={selectedKeys}
            style={{ lineHeight: "64px", float: "left" }}
          >
            <Menu.Item key="/">
              <Link to="/">Products</Link>
            </Menu.Item>
            <Menu.Item key="/users">
              <Link to="/users">User</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
          {/* shopping cart */}
          <Dropdown overlay={menu} placement="bottomRight">
            <div className={styles.cart}>
              <Icon type="shopping-cart" style={{ fontSize: 18 }} />
              <span>my cart</span>
              <Badge count={this.props.count} offset={[-4, -18]} />
            </div>
          </Dropdown>
        </Header>
        {/* content */}
        <Content className={styles.content}>
          <div className={styles.box}>{this.props.children}</div>
        </Content>
        {/* footer */}
        <Footer className={styles.footer}>React</Footer>
      </Layout>
    );
  }
}
