class Planet {
    constructor(x, y, speed, angle, color, size, distance, name, anchor) {
        this.x = x
        this.y = y
        this.speed = speed
        this.angle = angle
        this.color = color
        this.size = size
        this.distance = distance
        this.name = name
        this.anchorName = anchor
    }
    draw(c) {
        this.update()
        c.fillStyle = this.color
        c.beginPath()
        c.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        c.fill()
    }
    update() {
        if (!this.anchorName) {
            return
        }
        const anchor = planetarySystem[planetNames.indexOf(this.anchorName)]
        this.angle += this.speed * speedMod
        this.x = Math.cos(this.angle * Math.PI / 180) * (this.distance + this.size + anchor.size) + anchor.x
        this.y = Math.sin(this.angle * Math.PI / 180) * (this.distance + this.size + anchor.size) + anchor.y
        if (this.angle > 360) {
            this.angle -= 360
        }
    }
}