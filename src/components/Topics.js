import React from 'react';
import 'antd/dist/antd.css';
import './Test.css';
import { List, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

const topics = [
    'Big Data Analytics, Business Intelligence',
    'Web Services, and Semantic Web, Databases and Knowledge Management',
    'Data Mining Methods &amp; Algorithms',
    'Cloud, Parallel, Distributed and High Performance Computing',
    'E-Learning, E-Government and E-Health',
    'Internet of Things and Ambient Intelligence',
    'Agent Systems, Intelligent Computing and Applications',
    'Multimedia, Computer Vision and Image Processing',
    'Networking, Communications, Sensor Networks and Mobile Computing',
    'Security and Privacy',
    'Social Networks and Recommender Systems',
    'Software Engineering   and software Security',
    'Computer Architecture, Embedded Systems and Robots',
];

class Topics extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  };

  componentDidMount() {
    this.setState({data : topics})
  }

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    topics.map(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  };

  render() {
    return (
      <div className="demo-infinite-container centering2" >
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={topics}
            renderItem={item => (
              <List.Item >
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://icon-icons.com/icons2/2161/PNG/32/interface_attachment_link_paperclip_hyperlink_icon_133006.png" />
                  }
                  title={item}
                />
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

// style={{ maxWidth:'900px', margin: '5px auto', padding: '8px 16px', overflow: 'auto' }}
/*
function Topics() {
    return (
        <div className="demo-infinite-container centering">
            <Row gutter={8}>
                <Col md={12} xs={24} >
                    <List
                        style={{height:'100%', maxWidth:'450px',}}
                        size="small"
                        bordered
                        dataSource={data1}
                        renderItem={item => 
                            <List.Item>
                                <TagOutlined style={{paddingRight:'8px'}}/> 
                                {item}
                            </List.Item>
                        }
                    />
                </Col>
                <Col md={12} xs={24} >
                    <List
                        style={{height:'100%', maxWidth:'450px',}}
                        size="small"
                        bordered
                        dataSource={data2}
                        renderItem={item => 
                            <List.Item>
                                <TagOutlined style={{paddingRight:'8px'}}/>
                                {item}
                            </List.Item>
                        }
                    />
                </Col>
            </Row>
            
            
        </div>
    );
}
*/

export default Topics;