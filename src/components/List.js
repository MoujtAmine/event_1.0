import React from 'react';
import 'antd/dist/antd.css';
import './Test.css';

const items = [
    'Presentation/Organization of Research',
    'Novel Contribution',
    'Originality in Thought',
    'Key Strengths',
    'Key Weaknesses',
    'Areas of Improvement',
];

class List extends React.Component {
  

  render() {
    return (
      <div style={{maxWidth:'300px' ,margin:'0 auto'}} >
          <ui style={{textAlign:'left'}}>
              {items.map(item => {return(
                  <li>{item}</li>
              )} )}
          </ui>
      </div>
    );
  }
}

export default List;