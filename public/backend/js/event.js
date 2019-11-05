$(document).ready(function() {
    $('.add-more-image').click(function() {
        $(this).parent().append(' <input type="file" name="image" id="inputEmail4" placeholder="">')
    })
});