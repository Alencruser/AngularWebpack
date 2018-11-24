var express=require('express'),
	app=express(),
	bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('*',(req,res)=>{
	res.sendFile('./views/index.html');
})

app.listen(8080,()=>{
	console.log('Serveur en ligne sur le port 8080');
})