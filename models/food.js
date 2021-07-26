import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Food
}

const foodSchema = new Schema({
  name: {type: String, required: true},
  type: {type: String},
  rating: {type: Number, default: 0}
})

const Food = mongoose.model("Food", foodSchema)