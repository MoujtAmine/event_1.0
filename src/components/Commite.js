import React from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';

const count = 3;

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


class Committe extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.setState({
    initLoading: false,
    data: committe,
    list: committe,
    });
  }

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.state.data(res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={item.name}
                description={item.institut}
              />
              <div>{item.pays}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}

export default Committe;