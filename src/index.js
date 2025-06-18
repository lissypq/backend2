const express = require('express');
const config = require('./config');
console.log('>>> Config leída:', config);
const MongoProductRepository = require('./infraestructure/repositories/MongoProductRepository');
const MySQLProductRepository = require('./infraestructure/repositories/MySQLProductRepository');
const ProductController = require('./adapters/controllers/ProductController');
const productRoutes = require('./adapters/routes/productRoutes');
const { verifyToken } = require('./adapters/middlewares/authJwt');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./infraestructure/docs/swaggerConfig');
const MongoUserRepository     = require('./infraestructure/repositories/MongoUserRepository');
const PasswordHasher          = require('./infraestructure/services/PasswordHasher');
const TokenGenerator          = require('./infraestructure/services/TokenGenerator');
const refreshToken            = require('./infraestructure/services/RefreshToken');
const SignIn                  = require('./application/useCases/SignIn');
const authRoutes              = require('./adapters/routes/authRoutes');
const userRoutes          = require('./adapters/routes/userRoutes');
const SignUp              = require('./application/useCases/SignUp');
const OrderController = require('./adapters/controllers/OrderController');
const OrderRoutes = require('./adapters/routes/orderRoutes');
const OrderDetailsController = require('./adapters/controllers/OrderDetailController');
const OrderDetailsRoutes = require('./adapters/routes/orderdetailRoutes');
const MongoOrderDetailsRepository = require('./infraestructure/repositories/MongoOrderDetailsRepository');
const MongoOrderRepository = require('./infraestructure/repositories/MongoOrderRepository');
const CustomerController = require('./adapters/controllers/CustomerController');
const CustomerRoutes = require('./adapters/routes/customerRoutes');
const MongoCustomerRepository = require('./infraestructure/repositories/MongoCustomerRepository');
const CartController = require('./adapters/controllers/CartController');
const CartRoutes = require('./adapters/routes/cartRoutes');
const MongoCartRepository = require('./infraestructure/repositories/MongoCartRepository');
const CuponsController = require('./adapters/controllers/CuponsController');
const CuponsRoutes = require('./adapters/routes/cuponsRoutes');
const MongoCuponsRepository = require('./infraestructure/repositories/MongoCuponsRepository');
const orderRoutes = require('./adapters/routes/orderRoutes');


const app = express();
const port = config.port;
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Dependencies
const dbType = config.DB_TYPE || 'mongodb'; // 'mongo' o 'mysql'
let productRepository;
let orderDetailsRepository;
let orderRepository;
let customerRepository;
let cartRepository;
let cuponsRepository;
console.log('>>> DB_TYPE:', dbType);
if (dbType === 'mysql') {
  productRepository = new MySQLProductRepository();
} else {
  productRepository = new MongoProductRepository();
  orderDetailsRepository = new MongoOrderDetailsRepository();
  orderRepository = new MongoOrderRepository();
  customerRepository = new MongoCustomerRepository();
  cartRepository = new MongoCartRepository();
  cuponsRepository = new MongoCuponsRepository();


}
// —– SETUP AUTH —–
const userRepo       = new MongoUserRepository();
const passwordHasher = new PasswordHasher();
const tokenGen       = new TokenGenerator();
const refreshTokenGen = new refreshToken();

// —– SETUP SIGNIN —–
const signInUseCase  = new SignIn(userRepo, passwordHasher, tokenGen);
app.use('/api/v1/auth', authRoutes(signInUseCase));

// ——— SETUP SIGNUP ———
const signUpUseCase = new SignUp(userRepo, passwordHasher);

app.use('/api/v1/users',express.json(),userRoutes(signUpUseCase));

const productController = new ProductController(productRepository);
const orderController = new OrderController(orderRepository);
const orderDetailsController = new OrderDetailsController(orderDetailsRepository);
const customerController = new CustomerController(customerRepository);
const cartController = new CartController(cartRepository);
const cuponsController = new CuponsController(cuponsRepository);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));


app.use('/api/v1/products', verifyToken, productRoutes(productController));

app.use('/api/v1/orders', verifyToken, orderRoutes(orderController));
app.use('/api/v1/orderdetails', verifyToken, OrderDetailsRoutes(orderDetailsController));
app.use('/api/v1/customers', verifyToken, CustomerRoutes(customerController));
app.use('/api/v1/carts', verifyToken, CartRoutes(cartController));
app.use('/api/v1/cupons', verifyToken, CuponsRoutes(cuponsController));

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server!' });
});

// Start Server
app.listen(port, () => {
  console.log(`E-commerce server running on port http://localhost:${port}`);
});