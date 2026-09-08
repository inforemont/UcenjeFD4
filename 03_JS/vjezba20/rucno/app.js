$('#pozdravi').click(function(){
    $('#pozdrav').text('Hello world')
    $('#sakrij').show()
})  // bezimena funkcija kad se klikne na pozdravi ispise pozdrav svijete


$('#sakrij').hide()

$('#sakrij').click(function(){
    $('#pozdrav').text('')
    $('#sakrij').hide()
})