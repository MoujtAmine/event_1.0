import React from 'react';
import 'antd/dist/antd.css';
import './Test.css';
import { List, Avatar, Spin } from 'antd';

import InfiniteScroll from 'react-infinite-scroller';

const committe = [
    {id : 1,name :'Samuelson W. Hong', institut :'Oriental Institute of Technology, SMIEEE' , pays:'Taiwan'},
    {id : 2,name :'Michel Crampes', institut :'Ecole des Mines d’Ales' , pays:'France'},      
    {id : 3,name :'William Grosky', institut :'University of Michigan-Dearborn' , pays:'USA'},         
    {id : 4,name :'Joseph Sifakis', institut :'École polytechnique fédérale de Lausanne' , pays:'Swiss'},
    {id : 5,name :'M. Fayad',institut :'San José State University Washington' , pays:'USA'},
    {id : 6,name :'Yves Duthen', institut :'University Toulouse' , pays:'France'},
    {id : 7,name :'Fayçal Abouzaid',  institut :'École Polytechnique Québec' , pays:'Canada'},
    {id : 8,name :'Mohammed Erradi', institut :'Mohamed V University' , pays:'Morocco'},
    {id : 9,name :'Jamel FEKI', institut :'University of Sfax' , pays:'Tunisia'},
    {id : 10,name :'Shanmugasundaram Hariharan', institut :'SRM University' , pays:'India'},
    {id : 11,name :'Youssef Fakhri', institut :'FS- Kenitra University' , pays:'Morocco'},
    {id : 12,name :'Amal Zouaq', institut :'Royal Military College of Canada' , pays:'Canada'},
    {id : 13,name :'Abdelkrim Haqiq', institut :'FST- Hassan 1st Univ' , pays:'Morocco'},
    {id : 14,name :'Esma Aïmeur', institut :'Université of Montreal' , pays:'Canada'},
    {id : 15,name :'Arsalane Zarghili', institut :'FST Fés' , pays:'Morocco'},
    {id : 16,name :'Manoj Gupta', institut :'University of Rajasthan' , pays:'India'},
    {id : 17,name :'Martin Dudziak', institut :'Stratford University' , pays:'USA'},
    {id : 18,name :'Mirel Cosulschi', institut :'University of Craiova' , pays:'Romania'},
    {id : 19,name :'Zeeshan Ahmed', institut :'University of Wuerzburg' , pays:'Germany'},
    {id : 20,name :'Hatem Haddad', institut :'Universite Libre de Bruxelles' , pays:'Belgium'},   
        
    {id : 21,name :'Zhou Yimin', institut :'Chinese Academy of Science' , pays:'China'},    
    {id : 22,name :'Nan Zhang', institut :'Geroge Washington University' , pays:'USA'},    
    {id : 23,name :'Pasquale De Meo', institut :'University of Applied Sciences of Porto' , pays:'Italy'},    
    {id : 24,name :'Mohamed Youssfi', institut :'ENSET,Mohammedia' , pays:'Morocco'},    
    {id : 25,name :'Abderrahim Marzouk', institut :'FST- Hassan 1st Univ' , pays:'Morocco'},    
    {id : 26,name :'Ahmad Baharuddin Abdullah', institut :'Universiti Sains Malaysia' , pays:'Malaysia'},    
    {id : 27,name :'Srikanta Patnaik', institut :'SOA University, Bhubaneswar' , pays:'India'},    
    {id : 28,name :'Lahby Mohamed', institut :'ENS- Hassan II Univ' , pays:'Morocco'},    
    {id : 29,name :'Philippe Roose', institut :'University of Pau' , pays:'France'},    
    {id : 30,name :'Nizar Bouguila', institut :'Concordia University' , pays:'Canada'},    
    {id : 31,name :'Farid Temcamani', institut :'ENSEA, Cergy Pontois' , pays:'France'},    
    {id : 33,name :'Jeff Kephart', institut :'IBM T.J. Watson Research Center' , pays:'USA'},    
    {id : 34,name :'Riadh Robbana', institut :'INSAT and EPT' , pays:'Tunisia'},    
    {id : 35,name :'Mohamed Bahaj', institut :'FST- Hassan 1st Univ' , pays:'Morocco'},    
    {id : 36,name :'Kotowicz Jean-Philippe', institut :'INSA of Rouen' , pays:'France'},    
    {id : 37,name :'Mahmoud ABBAS', institut :'Alexandria University' , pays:'Egypt'},    
    {id : 38,name :'Hjh Siti Hawa Hamzah', institut :'Faculty of Civil Engineering' , pays:'Malaysia'},    
    {id : 39,name :'Lyes Bennamoun', institut :'University of New Brunswick' , pays:'Canada'},    
    {id : 40,name :'Lester Ingber', institut :'Research Publisher,Editor-in-Chief' , pays:'USA'},    
    {id : 42,name :'Abdulkareem Shafiq Mahdi Al-Obaidi', institut :"Taylor’s University,Executive Editor Journal of Engineering Science \&amp; Technology" , pays:'Malaysia'},    
    {id : 43,name :'Ahmad Yusairi BANI HASHIM', institut :'Faculty of Manufacturing Engineering' , pays:'Malaysia'},    
    {id : 44,name :'Mervat Adib Bamiah', institut :'Prince Sultan University' , pays:'Saudi Arabia'},    
    {id : 45,name :'Ahmed Kadhim Hussein', institut :'Babylon University' , pays:'Iraq'},    
    {id : 46,name :'P. Sivakumar', institut :'Tamilnadu University' , pays:'India'},     
]

/*

 Zhou Yimin, Chinese Academy of Science,(China)
 Nan Zhang, Geroge Washington University, (USA)
 Pasquale De Meo, University of Applied Sciences of Porto, (Italy)
 Mohamed Youssfi, ENSET,Mohammedia (Morocco)
 Abderrahim Marzouk, FST- Hassan 1st Univ, (Morocco)
 Ahmad Baharuddin Abdullah, Universiti Sains Malaysia, (Malaysia)
 Srikanta Patnaik, SOA University, Bhubaneswar, (India)
 Lahby Mohamed , ENS- Hassan II Univ, (Morocco)
 Philippe Roose , University of Pau, (France)
 Nizar Bouguila,Concordia University (Canada)
 Farid Temcamani , ENSEA, Cergy Pontois, (France)
 Jeff Kephart, IBM T.J. Watson Research Center, (USA)
 Riadh Robbana, INSAT and EPT (Tunisia)
Mohamed Bahaj, FST- Hassan 1st Univ,  (Morocco)
 Kotowicz Jean-Philippe, INSA of Rouen, (France)
 Mahmoud ABBAS, Alexandria University, (Egypt)
 Hjh Siti Hawa Hamzah, Faculty of Civil Engineering, (Malaysia)
 Lyes Bennamoun, University of New Brunswick, (Canada)
 Lester Ingber,Research Publisher,Editor-in-Chief (USA)
  Abdulkareem Shafiq Mahdi Al-Obaidi, Taylor’s University,Executive Editor,
Journal of Engineering Science &amp; Technology (Malaysia)
 Ahmad Yusairi BANI HASHIM, Faculty of Manufacturing
Engineering, (Malaysia)
 Mervat Adib Bamiah, Prince Sultan University, (Saudi Arabia)
 Ahmed Kadhim Hussein, Babylon University, (Iraq)
 P. Sivakumar,Tamilnadu University,  (India)
*/

class Test extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  };

  componentDidMount() {
    this.setState({data : committe})
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
    committe(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  };

  render() {
    return (
      <div className="demo-infinite-container centering" >
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={committe}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://icon-icons.com/icons2/2159/PNG/32/user_customer_icon_132912.png" />
                  }
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={item.institut}
                />
                <div>{item.pays}</div>
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

export default Test;

/*
topics :
Big Data Analytics, Business Intelligence
 Web Services, and Semantic Web, Databases and Knowledge Management 
 Data Mining Methods &amp; Algorithms
 Cloud, Parallel, Distributed and High Performance Computing 
 E-Learning, E-Government and E-Health 
 Internet of Things and Ambient Intelligence  
 Agent Systems, Intelligent Computing and Applications 
 Multimedia, Computer Vision and Image Processing 
  Networking, Communications, Sensor Networks and Mobile Computing 
  Security and Privacy. 
 Social Networks and Recommender Systems  
 Software Engineering   and software Security
 Computer Architecture, Embedded Systems and Robots

*/