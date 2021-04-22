const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4000

app.set('views', './views')
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/testProj1', { useNewUrlParser: true })

const introductionMessage = 'You awaken feeling cold and hungry. You have no idea how you got here. Your memory seems clouded. You remember who you are but many details seem fuzzy. You look around and see a dense dark forest. You hear animals in the background. Your hope is that they are herbivores! Behind you to the south is a tall rock face. Heading south is not an option.'
const goEastMessage = 'You see a trail that has been overgrown. The animal tracks do not appear to be from carnivores. In the distance you see a small hunter style cabin. You head towards it and see rays of sunshine coming through. The setting is serene as the forest opens up into a meadow.'
const goNorthMessage = 'As you approach the stone structure a figure dressed in a grey robe makes a hand gesture that suggests that you should come closer. As you approach the figure you feel the forest come to life around you. You and the structure are now surrounded by vines and your only path is to continue walking to the figure in grey. You notice a friendly smile on the figures face. A sense of relief warms you over. Finally I will get some answers you think hopefully.'
const goWestMessage = 'You see a well travelled path free of nature’s overgrowth. You follow the path as it gently takes you down the hill towards a body of water. You see a small wooden dock. On the dock rests a sign that says you must pay the ferry man to cross to the other side. You continue towards the dock hoping to find clues regarding where you are.'
const chooseEastMessage = 'As you approach the cabin you get the impression that someone is watching you. On the door step of the cabin sits a toad the size of a bulldog! It is somehow beckoning you to go closer. As you approach the toad you notice a shimmering glow around it. You focus on the toad and notice that it is some sort of illusion. You climb the porch to the cabin and the toad disappears with a loud bang that deafens your ears and makes you feel light headed. You walk into cabin to see if anyone lives there.'
const chooseNorthMessage = 'You see a creek in which the water is bustling over small rocks. You decide to cross it. You are aware that getting wet will make it difficult to recuperate from exertion. Bravely you step on the available rocks to avoid getting wet. The forest get thicker as you move forward. You notice that the forest canopy is blocking the sunlight. In the distance you see a circular stone structure that harkens to the famous Stonehenge historical monument. You walk towards this structure.'
const chooseWestMessage = 'As you approach the wooden dock you notice that it looks sturdy enough to walk on. You step on the dock and make your way to the hooded figure standing by the ferry. The figure lowers its hood and you see an opportunistic smile beaming at you. There is a faint melody in the background reminiscent of Chris de Burg. You wonder what could go wrong now!'
const eastCabin = 'The toad has disappeared. You enter the cabin. Suddenly, you feel your vision going blurry and fall unconscious to the floor. You awaken were you first came to in this strange land. You are now faced with a decision to go North or West as your Eastern choice has returned you to your point of origin.'
const northCreek = 'While approaching the figure a hole opens up and swallows you. You emerge in a different location. You wonder how is this possible. This seems to defy the laws of physics. You are now faced with a decision to East or West as your choice of going north has returned you to your point of origin.'
const westFerry = 'As you approach the ferry man, he walks up to you to greet you. You feel suspicious of this persons intentions as he reaches out to shake your hand. The ferry man says if you want to cross you must leave your shoes here. You were hoping to not pay until you get to the other side. You agree as your biggest desire is to leave this land. Reluctantly, you step onto the ferry.'
const wrapUp= 'The ferry is caught in a whirlpool. You wonder if trip insurance was offered for this trip. This strange and nonsensical world fades away as a bright light awakens you. You find yourself in your bed at home with many unanswered questions. As Sponge Bob would say: “Now I get it!!". This is all just a dream. You breathe a sigh of relief and take comfort in the fact that this adventure was not real!'

const sceneSchema = {
    id: Number,
    name: String,
    content: String
}

const Scene = mongoose.model('Scene', sceneSchema)

app.get('/', (request, response) => {
    response.render('index', {h1Text: 'This is a NodeJS, Express, EJS and MongoDB powered game...', message: 'Full Stack development approach for a story based game!'})
})

app.get('/intro', (request, response) => {
    response.render('intro', {h1Text: 'Unknown Origins (The Game!)', h2Text: 'An HTML linked based choose your own adventure story!', h3Text: 'Here is where our hero starts...', sectionMessage: introductionMessage })
})

app.get('/admin', (request, response) => {  //Fix me, or future enhancement
    response.render('admin', {text: 'Admin Page'})
})

app.get('/list', (request, response) => {
    Scene.find({}, function(err, scenes) {
        response.render('list', {
            sceneList: scenes
        })
    })
})

app.get('/about', (request, response) => {
    response.render('about', {h1Text: 'About Page', sectionMessage: 'Welcome to my game! Unknown Origins is my first game. I appreciate any feeback that you may have. Email address: mrangercode@gmail.com'})
})

app.get('/goEast', (request, response) => {
    response.render('goEast', {h1Text: 'East is as good a direction as any!', sectionMessage: goEastMessage})
})


app.get('/goNorth', (request, response) => {
    response.render('goNorth', {h1Text: 'Say, be the king of the north!', sectionMessage: goNorthMessage})
})
app.get('/goWest', (request, response) => {
    response.render('goWest', {h1Text: 'Head west young man they said! (or woman :)', sectionMessage: goWestMessage})
})

app.get('/chooseEast', (request, response) => {
    response.render('chooseEast', {h1Text: 'Onwards and Outwards! Your bravery is to be commended!!', sectionMessage: chooseEastMessage})
})

app.get('/chooseNorth', (request, response) => {
    response.render('chooseNorth', {h1Text: 'Forward is the only option! North it is!', sectionMessage: chooseNorthMessage})
})

app.get('/chooseWest', (request, response) => {
    response.render('chooseWest', {h1Text: 'That is out there! West is the new east!', sectionMessage: chooseWestMessage})
})

app.get('/eastCabin', (request, response) => {
    response.render('eastCabin', {h1Text: 'East is a bust! All roads lead to Rome!', sectionMessage: eastCabin})
})

app.get('/northCreek', (request, response) => {
    response.render('northCreek', {h1Text: 'Northward-ho! All roads lead to Rome! Wait, what?', sectionMessage: northCreek})
})

app.get('/westFerry', (request, response) => {
    response.render('westFerry', {h1Text: 'Do ferries wear boots? Might have to research this one!', sectionMessage: westFerry})
})

app.get('/wrapUp', (request, response) => {
    response.render('wrapUp', {h1Text: 'So much excitement! I will take a pass next time!', sectionMessage: wrapUp})
})

// app.get('/afterCabin', (request, response) => {
//     response.render('afterCabin', {h1Text: 'All roads lead to Rome!', sectionMessage: eastCabin})
// })

// app.get('/afterCreek', (request, response) => {
//     response.render('afterCreek', {h1Text: 'All roads lead to Rome!', sectionMessage: eastCabin})
// })

// app.get('/afterFerry', (request, response) => {
//     response.render('afterCreek', {h1Text: 'All roads lead to Rome! West is the Best!', sectionMessage: eastCabin})
// })

app.listen(port, () => {
    console.log(`Server is running port ${port}...`)
}) 