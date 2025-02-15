$(document).ready(function() {
    $("#registerForm").submit(function(event) {
        event.preventDefault();
        let formData = $(this).serialize();
        
        $.ajax({
            type: "POST",
            url: "process.php",
            data: formData,
            dataType: "json",
            success: function(response) {
                if (response.status === "success") {
                    toastr.success(response.message);
                    $("#registerForm")[0].reset();
                } else {
                    toastr.error(response.message);
                }
            }
        });
    });
});