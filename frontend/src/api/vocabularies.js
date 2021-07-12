import axios from './base.js'

export function vocabularies(search) {
    return axios.get(`/api/vocabularies.json?search${search? '=' + search : ''}`);
}

export function createVocabulary(word, vocalize, translate, example){
    var data = {
        vocabulary: {
            word: word,
            vocalize: vocalize,
            translate: translate,
            example: example,
        }
    }
    return axios.post('/api/vocabularies.json', data)
}

export function updateVocabulary(word, vocalize, translate, example, id) {
    var data = {
        vocabulary: {
            word: word,
            vocalize: vocalize,
            translate: translate,
            example: example,
        }
    }
    return axios.put(`/api/vocabularies/${id}.json`, data)
}

export function deleteVocabulary(id){
    return axios.delete(`api/vocabularies/${id}.json`)
}