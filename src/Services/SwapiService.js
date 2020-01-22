export default class SwapiServices {

    _apiBase = 'https://swapi.co/api';

        async fetchData(url) {
        try {
            const data = await fetch(`${this._apiBase}${url}`);
            if (!data.ok) {
                throw new Error('could not')
            } else {
                return data.json()
            }
        } catch (e) {
            console.log(e);
        }
    }

    async getPlanets() {
        const { results } = await this.fetchData(`/planets`);
        return results
    }

    async getPlanet(id) {
        return await this.fetchData(`/planets/${id}`)
    }
}
