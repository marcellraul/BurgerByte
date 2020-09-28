'use strict'
const path = require('path')
const fs_extra = require('fs-extra')
const Photo = require('../models/Photo')

async function createPhoto(req ,res  ){
    const { title,description}  = req.body
    const newPhoto = { 
        title:title, 
        description:description, 
        imagePath: req.file.path}
    //console.log(imagePath)
    const photo = new Photo(newPhoto)
    await photo.save();
    //console.log(req.body)
    console.log(photo)
    return res.json({
        message: 'Photo Saved Successfully',
        photo
    });  
}

async function getPhotos(req,res){
    const gets = await Photo.find()
    console.log(gets)
    return res.json(gets)
}

async function getPhoto(req,res){
    const {id} = req.params 
    const get = await Photo.findById(id)
    console.log(get)
    return res.json(get)
}

async function deletePhoto(req,res){
    const {id} = req.params 
    const deletep = await Photo.findByIdAndDelete(id)
    //if (deletep) {
      //  await fs.unlink(path.resolve(photo.imagePath));
   // }
    return res.json({ message: 'Product Deleted', deletep })   
}


async function updatePhoto(req,res){
    const id = req.params.id
    const { title,description}  = req.body
    const updatep = await Photo.findByIdAndUpdate(id , {title,description}, {new : true})
    console.log(updatep);
    return res.json({
        message: 'Successfully updated',
        updatep
    })
}

module.exports = {
    createPhoto,
    getPhotos,
    getPhoto,
    deletePhoto,
    updatePhoto

}
