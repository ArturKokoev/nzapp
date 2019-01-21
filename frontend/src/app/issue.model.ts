export interface Issue {
    id: string,
    _id: {
        city: String,
        lat: String,
        lng: String
    },
    count: {
        $sum: Number
    }

}