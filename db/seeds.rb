# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

unless User.find_by(username: "guest")
  User.create(
    username: "guest",
    password_digest: "$2a$10$ivFZmFpmMRjijSFpeo.QCO1enzsfNJWZp/9PsMXZrG17OfI5ChVRW",
    f_name: "Guest",
    l_name: "User"
  )
end
