import express from "express";
import User from "../models/Userschema.mjs";
const router = express.Router();


//CREATE: Add a new user
router.post('/', async (req, res) =>{
    const {name, email, password} = req.body;

    const newUser = new User ({
        name,
        email,
        password,
    });



    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);//Send the saved user as a response
        
    
    } catch (error) {
        // Log error to the console
        console.error('Error while saving user: ', error); //log error to the console
        res.status(400).json({message: error.message}); // Send error response
        
    }
});




//READ: REtrieve all users
router.get('/', async(req, res) => {
    try {
        const users = await User.find() //find users
        .skip(190);
        res.json(users)
        
    } catch (error) {
        console.error('Error while retrieving user', error);
        res.status(400).json({message: error.message});
        
    }
});


//READ: Retrieve a specific user by ID
router.get('/:id', async (req, res) => {
    try {
        const userbyId = await User.findById(req.params.id);
        if(!userbyId) return res.status(404).json({message: "user not found"})
        res.json(userbyId);

    } catch (error) {
        console.error('Error retrieving user by id', error);
        res.status(500).json({message: error.message})
        
    }
});

//UPDATE: Update user by Id
router.put('/:id', async (req, res) =>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
     
        });

        if (!user) return res.status(404).json({message: 'user not found'});
        res.json(user);
    } catch (error) {
        console.error('Error updating user', error);
        res.status(400).json({message: error.message});
        
    }
});


//DELETE: Delete user by Id
router.delete('/:id', async(req, res) => {
    try {
        const deleteduser = await User.findByIdAndDelete(req.params.id);
        if (!deleteduser) return res.status(404).json({message: 'User not found'});
        res.status(500).json({message: 'User deleted successfully'});
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({message: error.message});

        
    }
})


export default router;
