const getMutualFriends = (user1, user2) => {
  const friends1 = user1.getFriends();
  const friends2 = user2.getFriends();
  const friend1ID = friends1.map(({ id }) => id);
  return friends2.filter(({ id }) => friend1ID.includes(id));
};
