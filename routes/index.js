const express =require('express');
const router = express.Router();
const actions = require('../methods/actions')

router.get('/',(req,res) =>
{
    res.send('hello world')
})

router.get('/dashboard',(req,res)=>
{
    res.send('dashboard')
})

router.post('/adduser',actions.addnew);
router.post('/authenticate',actions.authenticate);

module.exports = router