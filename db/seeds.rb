# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Entry.destroy_all

User.destroy_all

Mood.destroy_all

happy = Mood.create(name: "happy", mood_icon:"happyimg")
sad = Mood.create(name: "sad", mood_icon: "sadimg")
meh = Mood.create(name: "meh", mood_icon: "mehimg")
angry = Mood.create(name: "angry", mood_icon: "angryimg")
excited = Mood.create(name: "excited", mood_icon: "excitedimg")


josh = User.create(username: "Jazel", password: "123456")
billybob = User.create(username: "billybob", password: "1234567")
michaelScott = User.create(username: "prisonMike", password: "111111")


entryOne = Entry.create(title: "A day in the life", content: "today was awesome! wooooo", mood: happy, user: josh)
entrytwo = Entry.create(title: "todays life", content: "yayayaya good day today wooooohoo", mood: excited, user: billybob)
entryThree = Entry.create(title: "ehhh", content: "today was bleh i dont know man ", mood: meh, user: billybob)
entryFour = Entry.create(title: "Prison", content: " life in prison is worse than in an office, there is more freedom not being in prison", mood: meh, user: prisonMike)