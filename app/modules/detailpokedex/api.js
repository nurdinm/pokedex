import axios from 'axios';

import * as c from './constants';

export function getListPokemon() {
    return new Promise((resolve, reject) => {
        let url = `${c.API_URL}${c.POKEMON_List}`;
        axios.get(url)
            .then((res) => resolve(res))
            .catch(error => reject(error.message))
    });
}

export function getTypePokemon(urlType) {
    return new Promise((resolve, reject) => {
        let url = urlType;
        axios.get(url)
            .then((res) => resolve(res))
            .catch(error => reject(error.message))
    });
}