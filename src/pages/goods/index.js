import React, { Component } from "react";
import { Card, Row, Col, Icon, Skeleton } from "antd";
import { TagSelect } from "ant-design-pro";
import { connect } from "dva";

@connect(
  state => ({
    courses: state.goods.courses,
    tags: state.goods.tags,
    // loading: state.loading
  }),
  {
    addCart: item => ({
      type: "cart/addCart",
      payload: item
    }),
    getList: () => ({
      type: "goods/getList"
    })
  }
)
class Goods extends Component {
  constructor(props) {
    super(props);
    // displayCourses
    this.state = {
      tags: [],
      displayCourses: new Array(8).fill({})
    };
  }
  componentDidMount() {
    this.props.getList();
  }
  componentWillReceiveProps(props) {
    // run tagSelectChange every time
    if (props.tags.length) {
      this.tagSelectChange(props.tags, props.courses);
    }
  }
  tagSelectChange = (tags, courses = this.props.courses) => {
    // filter content
    let displayCourses = [];
    tags.forEach(tag => {
      displayCourses = [...displayCourses, ...courses[tag]];
    });
    this.setState({ displayCourses, tags });
  };

  addCart = (e, item) => {
    e.stopPropagation();
    this.props.addCart(item);
  };

  render() {
    return (
      <div>
        {/* Tag */}
        <TagSelect onChange={this.tagSelectChange} value={this.state.tags}>
          {this.props.tags.map(tag => {
            return (
              <TagSelect.Option key={tag} value={tag}>
                {tag}
              </TagSelect.Option>
            );
          })}
        </TagSelect>
        {/* List */}
        <Row type="flex" justify="start">
          {this.state.displayCourses.map((item, index) => {
            return (
              <Col key={index} style={{ padding: 8 }} span={6}>
                {item.name ? (
                  <Card
                    extra={
                      <Icon
                        onClick={e => this.addCart(e, item)}
                        type="shopping-cart"
                        style={{ fontSize: 18 }}
                      />
                    }
                    onClick={() => this.toDetail(item)}
                    hoverable
                    title={item.name}
                    cover={<img src={"/course/" + item.img} />}
                  >
                    <Card.Meta
                      description={
                        <div>
                          <span>￥{item.price}</span>

                          <span style={{ float: "right" }}>
                            <Icon type="user" /> {item.solded}
                          </span>
                        </div>
                      }
                    />
                    <div />
                  </Card>
                ) : (
                  <Skeleton active={true} />
                )}
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default Goods;
