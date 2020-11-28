$(document).ready(function() {
    $("#file").change(function () {
        $('#data-selector h4').html($(this).val());
    });
})