import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import constants from '../utils/constants';
import {DateTime} from 'luxon';

import Text from '../components/TextCustom';

const Luxon = DateTime.local().setLocale('es');

const imageWidth = 99; 
const imageMargin = imageWidth + 20;

const imageHeight = 133;    
const cardTop = imageHeight / 2 - 10; 

const Movie = ({ movie, navigation }) => {

    const { title, vote_average, poster_path, popularity, release_date } = movie;

    const loadMovie = () => {
        navigation.navigate(constants.SCREEN.DETAILS, { movie } );
    };

    // para cargar imagenes: https://image.tmdb.org/t/p/original/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg
	// para cargar imagenes de fondo: https://image.tmdb.org/t/p/original//lA5fOBqTOQBQ1s9lEYYPmNXoYLi.jpg


    
    //console.log(DateTime.fromISO(release_date).toFormat('MMA, y'));
    return(     
        <Pressable style={styles.card} onPress={loadMovie}>
            <Image
                resizeMode="cover"
                style={styles.poster} 
                source={ {uri: `https://image.tmdb.org/t/p/original/${poster_path}`,} } 
            />

            <View style={{ flex: 1, marginLeft: imageMargin }}>
                <View style={styles.titleContainer}>
                    <Text fontFamily='bold' numberOfLines={1} style={styles.title}> {title} </Text>                    
                    <Text fontFamily='bold' style={styles.votes}> {vote_average}</Text>
                </View>                
                <Text style={styles.popularity}> {popularity.toFixed(0)} </Text>
                <Text style={styles.release_date}> {DateTime.fromISO(release_date).setLocale('es').toFormat('MMM, y')} </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: constants.COLORS.LIGHT,
        marginTop: cardTop,
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 30,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        position: 'relative',
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    title: {
        color: constants.COLORS.TEXT_COLOR,
        fontWeight: 'bold',
        flexGrow: 1,
        flexWrap: 'wrap', 
        marginRight: 12,
    },
    votes: {
        color: constants.COLORS.WARNING,
        fontSize: 16,
    },
    popularity: {
        color: constants.COLORS.PRIMARY,
        borderColor: constants.COLORS.PRIMARY,
        borderWidth: 1,
        padding: 2,
        width: 40,
        borderRadius: 4,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8,
        fontWeight: '300',
        fontSize: 10,
    },
    release_date: {
        fontSize: 12, 
        textTransform: 'capitalize',
    },
    poster: {
        width: imageWidth,
        height: imageHeight, 
        borderRadius: 16,
        position: 'absolute',
        bottom: 20,
        left: 20,
    },

});

export default Movie;