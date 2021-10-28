const express =require('express');
const router = express.Router();

router.get('/games', (req, res) => {
    res.render('game');
});  

router.get('/mobiles',(req, res)=>{
    res.render('mobile_page');
})

module.exports = router;
