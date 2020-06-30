def friend(friends)
  friends.select do | name |
    name.size == 4
  end
end