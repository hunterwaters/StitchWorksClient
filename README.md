Title of App: Stitch Works

Link to Live App: https://peaceful-refuge-08481.herokuapp.com/

<img width="1261" alt="Screen Shot 2020-12-09 at 11 25 13" src="https://user-images.githubusercontent.com/55896961/101678403-c2fb3f00-3a12-11eb-95ee-b9cf39ab1d6e.png">

<img width="1259" alt="Screen Shot 2020-12-09 at 11 26 17" src="https://user-images.githubusercontent.com/55896961/101678445-cee70100-3a12-11eb-9f33-1d36a1bf1e8d.png">

<img width="1273" alt="Screen Shot 2020-12-09 at 11 25 37" src="https://user-images.githubusercontent.com/55896961/101678455-d3131e80-3a12-11eb-8930-045ce21024e2.png">

API Summary: This API has a number of different protected routes making it easy for a logged in user to submit an order as well as give a user with proper admin credentials access to change, add, and delete orders or products. This API securely stores login credentials to MonogoDB and retrieves the user's email and password from the database. Within the project I have integrated the PayPal API as well. This allows the user to connect their PayPal account to the application to make purchases easier for the user. There are also endpoints integrated into the project specifically for filtering products in a number of different ways.

Endpoints: 

Orders:

@route GET api/order @desc Get a list of orders @access Private

@route GET api/order/:id @desc Get a list of orders by ID @access Private

@route DELETE api/order/:id @desc Delete an order by ID @access Private

@route POST api/order @desc Create a new order @access Private

@route PUT api/order/pay @desc Find an order an edit by ID @access Private

Products:

@route GET api/product @desc Get all products @access Public

@route GET api/product/:id @desc Get product by ID @access Public

@route PUT api/product/:id @desc Edit and change products @access Private

@route DELETE api/product/:id @desc Delete a product by ID @access Private

@route POST api/product @desc Post a new product @access Private

Users:

@route PUT api/user/:id @desc Update a user's information @access Private

@route POST api/user/signin @desc Sign in to application @access Public

@route POST api/user/register @desc Register a new user @access Public

@route GET api/user/createadmin @desc Get a list of admins @access Private

Description: This application is a full stack E-Commerce website complete with login, register, and admin endpoints. The application allows the user to look at products, add them to cart, and connect their PayPal account for purchasing. By allowing products and orders to be edited and deleted, this application gives way to a real life E-Commerce website experience. There is also different ways of filtering products on the application such as price and category. Enjoy!!

Technolgies Used on Client: React, Redux, HTML, CSS, and JavaScript

