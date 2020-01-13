export default class SwapiService {
   _baseUrl = 'https://swapi.co/api/';

    async _getData(url) {
        try {
            const data = await fetch(`${this._baseUrl}${url}`);
            if (!data.ok) {
                throw (new Error(`tatus code:${data.status}`))
            }

            return await data.json();

        } catch (error) {
            console.log(error);
        }
    }
}