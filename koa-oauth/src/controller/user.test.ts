import bcrypt from 'bcrypt';
import { User } from '../model/user';
import { createUser } from './user';

jest.mock('bcrypt', () => require('__mocks__/bcrypt'));
jest.mock('../model/user', () => require('__mocks__/user'));

describe('createUser', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create a new user with hashed password', async () => {
    const username = 'testuser';
    const email = 'test@example.com';
    const password = 'testpassword';
    const salt = 'randomsalt';
    const hashedPassword = 'hashedpassword';

    // Mock the User.findOne method
    User.findOne.mockResolvedValueOnce(null);

    // Mock the bcrypt functions
    bcrypt.genSalt.mockResolvedValueOnce(salt);
    bcrypt.hash.mockResolvedValueOnce(hashedPassword);

    // Mock the User.create method
    const mockUser = {
      id: 1,
      username,
      email,
      passwordHash: hashedPassword,
      salt,
    };
    User.create.mockResolvedValueOnce(mockUser);

    const user = await createUser(username, email, password);

    expect(User.findOne).toHaveBeenCalledWith({ where: { email } });
    expect(bcrypt.genSalt).toHaveBeenCalledWith(10);
    expect(bcrypt.hash).toHaveBeenCalledWith(password, salt);
    expect(User.create).toHaveBeenCalledWith({
      username,
      email,
      passwordHash: hashedPassword,
      salt,
    });
    expect(user).toEqual({
      id: 1,
      username,
      email,
    });
  });
});
