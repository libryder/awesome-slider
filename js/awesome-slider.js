$(document).ready(function() {
  selector = $('.awesome-image')
  image_count = selector.length
  images = Array
  
  selector.each(function(num, div) {
    images[num] = selector[num]
  })
  
  current_image = 0
  next_image()
})

function next_image() {
  next_div = $('<div></div>')
  current_image++
  next_img = selector[current_image]
  next_div.append(next_img)
  
  $('#awesome-show').append(next_div)
  $(selector[current_image]).fadeIn('fast')
}

function previous_image() {

}