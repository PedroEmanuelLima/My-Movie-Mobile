import React, { useState, useEffect } from 'react';
import { TextInput, SafeAreaView, Text, View, ActivityIndicator, FlatList } from "react-native";
import { Movie } from '../../componets/Movie';
import { api } from '../../config/index'; 

import { style } from './styles';
const Home = () => {

    const [title, setTitle] = useState("");
    const [data, setData] = useState([]);
    const [results, setResults] = useState(0)
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    useEffect(()=>{

        const getMovies = () => {
            if (title.trim().length <= 0) {
                api.get(`/3/movie/popular?language=en-US&page=1`)
                    .then(({ data }) => {
                        setData(data.results);
                    })
                    .catch(() => {
                        setStatus({
                            type: 'error',
                            mensagem: 'Erro: tente mais tarde!'
                    })
                });
            } else {
                api.get(`/3/search/movie?query=${title}`)
                    .then(({ data }) => {
                        setData(data.results);
                        setResults(data.total_results);
                    })
                    .catch(() => {
                        setStatus({
                            type: 'error',
                            mensagem: 'Erro: tente mais tarde!'
                    })
                });
            }
        };

        getMovies();
    }, [title]);

    useEffect(() => {
        setStatus({ type: '', mensagem: ''});
        setTimeout(() => {
            if (title.trim().length > 0 & results === 0) {
                setStatus({ type: 'error', mensagem: 'Erro: Filme Não Encontrado!'});
            } else {
                setStatus({ type: '', mensagem: ''});
            }
        }, 2000);
    }, [data, title])

    const renderItem = ({ item }) => (
        <Movie
            movie={item}
        />
      );

    return (
        <SafeAreaView style={style.container}>
            <TextInput
                style={style.inputSearch}
                onChangeText={setTitle}
                value={title}
            />
            {status.type === 'error' ? <Text style={style.textError}>{status.mensagem}</Text> : null}
            {data.length <= 0 && status.type === ""
                ?
                <View >
                    <ActivityIndicator size="large" color="#dc3545"/>
                </View>
                :
                <View>
                    <View>
                        {title.trim().length > 0 && status.type === "" 
                            ? <Text style={style.textH2}>Resultados:</Text> 
                            : <Text style={style.textH2}>{status.type === "error" ? null : "Em alta:"}</Text>
                        }
                    </View>

                    <SafeAreaView style={style.content}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                </View>
            }
        </SafeAreaView>

  );
};

export default Home;