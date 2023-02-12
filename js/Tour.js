AFRAME.registerComponent("tour", {
    init: function(){
        this.placesContainer = this.el
        this.createCards()
    },

    createCards: function(){
        const thumbnailsRef = [
            {
                id: "taj-mahal",
                title: "Taj Mahal",
                url: "./assets/thumbnails/taj_mahal.png"
            },
            {
                id: "new-york-city",
                title: "New York City",
                url: "./assets/thumbnails/new_york_city.png"
            },
            {
                id: "eiffel-tower",
                title: "Eiffel Tower",
                url: "./assets/thumbnails/eiffel_tower.jpg"
            },
            {
                id: "budapest",
                title: "Budapest",
                url: "./assets/thumbnails/budapest.jpg"
            }
        ]

        var previousXPosition = -60

        for(var item in thumbnailsRef){
            const posX = previousXPosition + 25
            const posY = 10
            const posZ = -40
            const position = {x: posX, y: posY, z: posZ}

            previousXPosition = posX

            const borderE1 = this.createBorder(position, item.id)
            const titleE1 = this.createTitle(position, item)
            titleE1.appendChild(thumbnailsE1)
            const thumbnailsE1 = this.createThumbnail(item)
            borderE1.appendChild(thumbnailsE1)

            this.placesContainer.appendChild(borderE1)
        }
    },

    createBorder: function(position, id){
        const entityE1 = document.createElement("a-entity")
        entityE1.setAttribute("id", id)
        entityE1.setAttribute("visible", true)
        entityE1.setAttribute("geometry", {premitive: "ring", radiusInner: 9, radiusOuter: 10})
        entityE1.setAttribute("position", position)
        entityE1.setAttribute("material", {color: "red", opacity: 0.4})

        return entityE1
    },

    createThumbnail: function(item){
        const entityE1 = document.createElement("a-entity")
        entityE1.setAttribute("visible", true)
        entityE1.setAttribute("geometry", {premitive: "circle", radiusInner: 9})
        entityE1.setAttribute("material", {src: item.url})

        return entityE1
    },

    createTitle: function(position, item){
        const entityE1 = document.createElement("a-entity")
        entityE1.setAttribute("text", {font: "exo2bold", align: "center", width: 70, value: item.title, color: "#e65100"})
        const e1Position = e1Position
        e1Position.y = -20
        entityE1.setAttribute("position", position)
        entityE1.setAttribute("visible", true)

        return entityE1
    }
})