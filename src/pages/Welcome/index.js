import React, { PureComponent } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, ImageBackground, FlatList, SafeAreaView } from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

const resizeMode = 'center';

export default class Welcome extends PureComponent {

    state = {

        data: [

            { id: "0", name: "Camera" },
            { id: "1", name: "Maps" },

        ]

    }  

    actionOnRow = (item) => {

        if (item.id == 0) {
            this.props.navigation.navigate('Camera');
        }

        else if (item.id == 1) {
            this.props.navigation.navigate('MapsScreen');
        }

        console.log('Selected Item : ' + item.id)
    
    }

    render() {
      return (

        <ImageBackground
            style={styles.image}
            source={require('../../assets/img/20190405_141511.jpg')}
        >
        
        <SafeAreaView>

        <View style={styles.titleContainer}>
            <Text stlye={styles.title}>Shawee - Hackathon Boilerplate</Text>
        </View>        

        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (

              <TouchableWithoutFeedback onPress={() => this.actionOnRow(item)}>  

                <View style={styles.item}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>

              </TouchableWithoutFeedback>

            );
          }}
        />
        
      </SafeAreaView>

      </ImageBackground>
    );
  }
  
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        backgroundColor: '#ccc',
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    titleContainer: {
        backgroundColor: "#FFF",
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    title: {

    },
    item: {
        alignItems: "center",
        backgroundColor: "#FFF",
        flexGrow: 1,
        elevation: 1,
        margin: 5,
        marginRight: 31,
        marginLeft: 31,
        padding: 20
    },
    text: {
        color: "#000"
    }
});