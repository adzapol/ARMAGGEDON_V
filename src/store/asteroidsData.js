import { makeAutoObservable } from 'mobx'

class AsteroidsData {
    data = []
    textLoading = true
    // pageInfo = false

    constructor() {
        makeAutoObservable(this)
    }
    fetchData() {
        this.textLoading = true
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=UJEk663qRIEfkQUcY7H5eo0Mv5c6HUoneNus8wbW')
            .then(response => response.json())
            .then(json => {
                    this.data = [...this.data, ...json.near_earth_objects]
                    this.textLoading = false
            })
    }
}

export default new AsteroidsData()