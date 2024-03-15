import User from "../models/user.model.js";

export async function create(user) {
  return await User.create(user);
}

export async function find() {
  return await User.find({});
}

export async function findWithId(id) {
  return await User.findOne({ user_id: id });
}

export async function findWithUsername(username) {
  return await User.findOne({ username: username });
}

export async function findWithEmail(email) {
  return await User.findOne({ email: email });
}

export async function findOneAndUpdate(id, user) {
  return await User.findOneAndUpdate({ user_id: id }, { $set: user });
}
