const controller = {}

controller.list = (req,res) => {
	req.getConnection((err,conn) => {
		conn.query('SELECT * FROM customers',(err,customers) => {

			if(err){
				res.json(err);
			}
			console.log(customers);
			res.render('customer',{
				data: customers
			})

		});
	}); 

}
module.exports = controller;