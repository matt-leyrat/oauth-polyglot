import { FindOptions } from 'sequelize';
import { User } from '../model/user';
import bcrypt from 'bcrypt';

interface UserFindOptions extends FindOptions {
  where: {
    email: string;
  };
}

export const createUser = async (username: string, email: string, password: string) => {
  // Check if user already exists
  const existingUser = await findUser(email);
  if (existingUser) {
    throw new Error('Email already in use');
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  // Create a new user
  const newUser = new User({
    username,
    email,
    passwordHash,
    salt
  });

  // Save the user to the database
  const savedUser = await newUser.save();

  // Return the saved user (without the password)
  return {
    id: savedUser.id,
    username: savedUser.username,
    email: savedUser.email
  };
};

export const findUser = async (email: string) => {
  const findOptions: UserFindOptions = {
    where: { email }
  };
  const user = await User.findOne(findOptions);
  return user;
};
