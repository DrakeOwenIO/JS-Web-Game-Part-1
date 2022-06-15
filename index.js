function newImage(imageLocation, leftPos, bottomPos){
    let imageToRender = document.createElement('img')
    imageToRender.src = imageLocation
    imageToRender.style.position = 'fixed'
    imageToRender.style.left = leftPos
    imageToRender.style.bottom = bottomPos
    document.body.append(imageToRender)
    return imageToRender
}

function newItem(itemLocation, leftPos, bottomPos){
    let item = newImage(itemLocation, leftPos, bottomPos)

    item.addEventListener('dblclick', function(){
        item.remove()
})

}

-
// Rending all the images on the page
// ---------------------------------------------------------------
// Elf Dude
newImage('assets/green-character.gif', '100px', '100px')

// Pine Tree
newImage('assets/pine-tree.png', '450px', '200px')

// Other Tree
newImage('assets/tree.png', '200px', '300px')

// Pillar
newImage('assets/pillar.png', '350px', '100px')

// Crate
newImage('assets/crate.png', '150px', '200px')

// Well
newImage('assets/well.png', '500px', '425px')


// Rending Items
// ---------------------------------------------------------------
// Sword
newItem('assets/sword.png', '500px', '405px')

// Sheild
newItem('assets/sheild.png', '165px', '185px')

// Staff
newItem('assets/staff.png', '600px', '100px')
