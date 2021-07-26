import { Food } from '../models/food.js'

export{
    index,
    show,
    create,
    update,
    deleteFood as delete
}

function index(req,res){
    Food.find({})
    .then(function(foods){
        res.status(200).json(foods)
    })
    .catch(err =>{
        res.json(err)
    })
}

function show(req,res){
    Food.findById(req.params.id)
    .then(foods =>{
        res.json(foods)
    })
    .catch(err =>{
        res.json(err)
    })
}

function create(req, res) {
    Food.create(req.body)
    .then(puppy => {
      res.json(puppy)
    })
    .catch(err => {
      res.json(err)
    })
  }

function update(req, res){
    Food.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(food =>{
        res.json(food)
    })
}

function deleteFood(req, res) {
    Food.findByIdAndDelete(req.params.id)
    .then(food =>{
        res.json(food)
    })
  }