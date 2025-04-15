import bcrypt from 'bcryptjs';

// In-memory database for users
let users = [
  {
    _id: '1',
    name: 'Admin User',
    mobile: '9999999999',
    password: '$2a$10$oZCj/wUDNUHxGq7fC.hYcO7ZVzAn2mGWL2t2pC5Cfxy1iFsgihhLG', // 'password123'
    role: 'admin',
    registeredAt: new Date().toISOString()
  }
];

export const findOne = async (query) => {
  if (query.mobile) {
    return users.find(user => user.mobile === query.mobile);
  }
  return null;
};

export const findById = async (id) => {
  return users.find(user => user._id === id);
};

export const create = async (userData) => {
  const { name, mobile, password } = userData;
  
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  // Generate a simple ID
  const _id = (users.length + 1).toString();
  
  const newUser = {
    _id,
    name,
    mobile,
    password: hashedPassword,
    role: 'user',
    registeredAt: new Date().toISOString()
  };
  
  users.push(newUser);
  
  // Return a copy without the password
  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

export const find = async () => {
  // Return copies without passwords
  return users.map(({ password, ...user }) => user);
};

export const matchPassword = async (enteredPassword, hashedPassword) => {
  return bcrypt.compare(enteredPassword, hashedPassword);
};

export default {
  find,
  findOne,
  findById,
  create,
  matchPassword
}; 