//set up
var cvs = document.getElementById('main')
var c = cvs.getContext('2d')
cvs.width = innerWidth
cvs.height = innerHeight

//global variables
var CENTER_X = innerWidth / 2
var CENTER_Y = innerHeight / 2
var showOrbit = false
var speedMod = 1

c.fillStyle = 'black'
c.fillRect(0, 0, innerWidth, innerHeight)


// x, y, speed, angle, color, size, distance
var planetarySystem = [
    new Planet(CENTER_X, CENTER_Y, 0.5, 0, 'blue', 10, 100, 'earth', ''),
    new Planet(0, 0, 0.1, 0, 'yellow', 30, 70, 'sun', 'earth'),
    new Planet(0, 0, 1.5, 0, 'gray', 5, 10, 'mercury', 'sun'),
    new Planet(0, 0, 1.2, 0, '#ab4824', 8, 22, 'venus', 'sun'),
    new Planet(0, 0, 0.8, 0, 'red', 5, 120, 'mars', 'sun'),
    new Planet(0, 0, 0.7, 0, 'orange', 15, 150, 'jupiter', 'sun'),
    new Planet(0, 0, 0.5, 0, '#ad9a53', 12, 200, 'saturn', 'sun'),
]

var planetNames = []

// setting up name anchoring system
planetarySystem.forEach(planet => {
    planetNames.push(planet.name)
})

function animate() {
    c.fillStyle = 'black'
    c.fillRect(0, 0, innerWidth, innerHeight)

    for (i = 0; i < planetarySystem.length; i++) {
        planet = planetarySystem[i]
        planet.draw(c)
    }
    requestAnimationFrame(animate)
}
animate()
