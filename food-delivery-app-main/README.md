# kajalshakya hosted link : https://delivery-app-qu7m.vercel.app/
# food hostlink : https://delivery-app-lime.vercel.app/

# 🍔 MERN Stack Food Delivery App 🚀

A **full-stack food delivery web application** built using **MERN (MongoDB, Express.js, React, Node.js)**. This app allows users to browse restaurants, add food to the cart, place orders, and track their deliveries in real time.

## 🔥 Features

✅ **kajalshakya Authentication** (JWT-based Login & Signup)  
✅ **Browse Food Menu & Add to Cart** 🛒  
✅ **Secure Payment Integration** (Stripe or Razorpay)  
✅ **Order Tracking System** 📦  
✅ **kajalshakya Dashboard** (Manage Orders, Users, and Restaurants)  
✅ **Responsive UI** (Mobile & Desktop Friendly)  
✅ **RESTful API with Express & MongoDB**  
✅ **Cloudinary Integration for Image Uploads**  

---

## 🛠️ Tech Stack

### **Frontend (React)**
- React.js with Context API
- React Router for navigation
- Axios for API calls
- Tailwind CSS / Bootstrap for styling

### **Backend (Node.js & Express)**
- Express.js for server & API
- MongoDB with Mongoose for database
- bcrypt.js for password hashing
- JWT for authentication

### **Database**
- MongoDB (NoSQL) with Mongoose ORM

### **Other Tools**
- Stripe / Razorpay for payments
- Cloudinary for image uploads
- dotenv for environment variables

# output
![image](https://github.com/kajalshakya-attachments/assets/67087c15-c88c-4d76-b51b-9fc494b5cdd9)

![image](https://github.com/kajalshakya-attachments/assets/d75896af-d4a5-4da8-b374-c2078a057de1)

![image](https://github.com/kajalshakya-attachments/assets/88f6e1e4-b34f-4df8-a64c-5b5e41628a61)

![Uploading image.png…]()

![Uploading image.png…]()





---

## 📌 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/sandhyasawalkar1999/food-delivery-app.git
cd food-delivery-app

# 2️⃣ Install Dependencies
Backend
cd backend
npm install


Frontend
sh
Copy
Edit
cd frontend
npm install
3️⃣ Set Up Environment Variables
Create a .env file in the backend directory and add:

env
Copy
Edit
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4️⃣ Start the Development Servers
Run Backend:
sh
Copy
Edit
cd backend
npm start
Run Frontend:
sh
Copy
Edit
cd frontend
npm start
The app will be live on http://localhost:3000 (frontend) and the backend API will run on http://localhost:5000.

🚀 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new kajalshakya
POST	/api/auth/login	kajalshakya login
GET	/api/foods	Get food items
POST	/api/orders	Place an order
GET	/api/orders/:id	Get order details


🔥 Future Enhancements
🛵 Real-time Order Tracking with WebSockets
📱 Mobile App Version
🌍 Multi-vendor Support

