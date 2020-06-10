import axios from 'axios'

class ContentService {
    getCategorys() {
        return axios.get('http://localhost:3002/category')
    }

    getCategory(id) {
        return axios.get(`http://localhost:3002/category/${id}`)
    }

    deleteCategory(id) {
        return axios.delete(`http://localhost:3002/category/${id}`)
    }

    postCategory(newCategory) {
        return axios.post('http://localhost:3002/category', newCategory)
    }
}
export default new ContentService();