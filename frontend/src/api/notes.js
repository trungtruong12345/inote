import axios from './base.js'

export function notes(search) {
    return axios.get(`/api/notes.json?search${search? '=' + search : ''}`);
}

export function createNote(title, content, bgColor){
    var data = {
        note: {
            title: title,
            content: content,
            bgColor: bgColor,
        }
    }
    return axios.post('/api/notes.json', data)
}

export function updateNote(title, content, bgColor, id) {
    var data = {
        note: {
            title: title,
            content: content,
            bgColor: bgColor,
        }
    }
    return axios.put(`/api/notes/${id}.json`, data)
}


export function deleteNote(id){
    return axios.delete(`api/notes/${id}.json`)
}