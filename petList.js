import React from 'react';
import {
	View,
	ListView,
	StyleSheet,
	Text
} from 'react-native';

const styles=StyleSheet.create({
	container:{
		flex:1,
		marginTop:20,
	},
});

var pets =['Puppy1','Puppy1','Puppy1','Puppy1','Puppy1','Puppy1','Puppy1','Puppy1','Puppy1','Puppy1','Puppy1']

class PetList extends React.Component{
    constructor(props){
        super(props);
        const ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state={
            dataSource:ds.cloneWithRows(['row 1', 'row 2']),
            petsList:[],
            loded:true
        };
    }
    componentDidMount(){
    	this.fetchData();
  	}
  	fetchData(){
  		this.state.petsList=pets;
  		this.setState({
              dataSource: this.state.dataSource.cloneWithRows(this.state.petsList),
              loaded: true,
	   });

  	}
    render(){

    		return (
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={(rowData)=><Text> {rowData} </Text> }
            />
    		
        
         );
	}
}


export default PetList;