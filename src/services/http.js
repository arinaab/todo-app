export  default class Http{
    constructor(url) {
        this.url = url;
    }
    async get () {
        const res = await fetch(this.url)
        if (!res.ok) {
            throw new Error(`could not fetch ${this.url}, status: ${res.status}`)
        }
        return await res.json()
    }
    async post (data) {
        const res = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        })
        return await res.json()
    }
}