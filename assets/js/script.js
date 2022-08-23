// TODO: Declare any global variables we need


var totalHeads = 0
var totalTails = 0
document.addEventListener('DOMContentLoaded', function () {

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', function(){
        if(Math.random() < 0.5){
           document.getElementById('penny-image').src ='assets/images/penny-heads.jpg'
           document.getElementById('message').textContent = "You Flipped Heads!"
           totalHeads++
        } else {
            document.getElementById('penny-image').src ='assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = "You Flipped Heads!"

            totalTails++
        }
        var total = totalHeads + totalTails

        var percentHeads = Math.round((totalHeads/ total) * 100)
        var percentTails = Math.round((totalTails / total) * 100)

        document.getElementById('heads').textContent = totalHeads
        document.getElementById('tails').textContent = totalTails
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    document.getElementById('clear').addEventListener("click", function(){
        totalHeads = 0
        totalTails = 0

        document.getElementById('message').textContent = "Let\'s get rolling!"

        document.getElementById('heads').textContent = totalHeads
        document.getElementById('tails').textContent = totalTails
        document.getElementById('heads-percent').textContent = 0 + '%'
        document.getElementById('tails-percent').textContent = 0 + '%'

    })

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})