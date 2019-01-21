import mongoose from 'mongoose';

var Schema = mongoose.Schema;


var Issues = new Schema({

    _id: {
        city: String,
        lat: String,
        lng: String
    },
    count: {
        $sum: Number
    }

            });

        export default mongoose.model('Issues', Issues);