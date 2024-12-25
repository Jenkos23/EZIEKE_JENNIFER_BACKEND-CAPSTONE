import express from "express";
import { designersData, fashionData } from "../data/fashionData.mjs";
const router = express.Router();


// CREATE: Create new fashion entry
router.post('/', (req, res) => {
    const newFashionItem = req.body;
    fashionData.push(newFashionItem);  // Add to the local array
    res.status(201).json(newFashionItem);  // Respond with the created item
  });
  


  // GET : Get all fashion entries
router.get('/', (req, res) => {
    res.status(200).json(fashionData);  // Respond with the local fashion data array
  });
  


  // GET: Get a fashion entry by author (case-insensitive, partial match)
router.get('/:id', (req, res) => {
     const searchName = req.params.id.toLowerCase();  // Convert search parameter to lowercase

  // Find the fashion item where the author's name includes the search name (case-insensitive)
     const fashionItem = fashionData.find(item => item.author.toLowerCase().includes(searchName));

     if (!fashionItem) {
         return res.status(404).json({ error: 'Fashion item not found' });
       }

      res.status(200).json(fashionItem);  // Respond with the found item
  });


// Route to get designer by ID
router.get('/designer/:id', (req, res) => {
    const designerId = parseInt(req.params.id);
    
    // Find the designer by the ID
    const designer = designersData.find(d => d.id === designerId);

    if (designer) {
        res.json(designer);
    } else {
        res.status(404).json({ error: "Designer not found" });
    }
});
   


  //DELETE:  Delete a fashion entry (case-insensitive, partial match by author)
  router.delete('/:id', (req, res) => {
    const searchName = req.params.id.toLowerCase();  // Convert search parameter to lowercase
  
    // Find the index of the fashion item where the author's name includes the search name (case-insensitive)
    const index = fashionData.findIndex(item => item.author.toLowerCase().includes(searchName));
  
    if (index === -1) {
      return res.status(404).json({ error: 'Fashion item not found' });
    }
  
    // Remove the fashion item from the array
    const deletedItem = fashionData.splice(index, 1);  // Remove the item from the array
    res.status(200).json({ message: 'Fashion item deleted', item: deletedItem });  // Respond with success
  });



  
  
  
  
  export default router;

