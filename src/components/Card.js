import React from 'react';
import { 
    View, 
    Text,
    Image, 
    StyleSheet,
    Dimensions 
} from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Card = (props) => {
    return (
        <View
            style={{
                width: width
            }}
        >
            <View style={styles.main}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/images/product.jpeg')} />
                </View>
                <View style={styles.box1}>
                    <Text
                        style={{
                            fontSize: 28,
                            fontWeight: 'bold',
                            color: '#000'
                        }}
                    >
                        {props.name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#c2c2c2'
                        }}
                    >
                        {props.details}
                    </Text>
                </View>
                <View style={styles.box2}>
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#403e3e'
                        }}
                    >
                        Rs. {props.price}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#f5f4f2',
        margin: 10,
        borderRadius: 5,
        elevation: 6,
        height: '50%',
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    box1: {
        flex: 0.3,
        paddingHorizontal: 10
    },
    box2: {
        flex: 0.2,
        justifyContent: 'center',
        paddingHorizontal: 10
    }
});

export default Card