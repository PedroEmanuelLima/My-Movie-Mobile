import React, { useState } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { style } from './styles.js';
import { ModalMovie } from './ModalMovie.js';


export const Movie = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

    const {
        title,
        poster_path,
        release_date,
        overview,
        vote_average
    } = props.movie;

    return(
        <View style={style.card}>
            <Image
                style={style.imgMovie}
                source={{
                    uri: `https://image.tmdb.org/t/p/w200/${poster_path}`
                }}
            />
            <Text style={style.titles}>{title}</Text>
            <Text style={style.textos}>Data de lançamento: {release_date}</Text>

            <ModalMovie
                title={title}
                overview={overview}
                vote_average={vote_average}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
            <Pressable
                style={[style.button, style.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text>More</Text>
            </Pressable>
        </View>
    );
}