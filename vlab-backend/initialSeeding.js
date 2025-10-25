const User = require("./models/User");
const { getHashedString } = require("./helpers/bcrypt");

const createIfNotExists = async (Model, query, data) => {
  const existingItem = await Model.findOne(query);
  if (!existingItem) {
    await Model.create(data);
  }
};

const initialSeeding = async () => {
  await createIfNotExists(
    User,
    { username: "superadmin" },
    {
      username: "superadmin",
      password: getHashedString("123"),
      role: "teacher",
    }
  );

  await createIfNotExists(
    User,
    { username: "Student X" },
    {
      username: "Student X",
      password: getHashedString("123"),
      role: "student",
    }
  );

  await createIfNotExists(
    User,
    { username: "Teacher X" },
    {
      username: "Teacher X",
      password: getHashedString("123"),
      role: "teacher",
    }
  );
};

module.exports = initialSeeding;
