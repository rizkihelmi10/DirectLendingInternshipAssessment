/*var input = document.querySelector('postcode');
    var indicator = document.querySelector('.ri');
    var info = document.getElementById("state");
    var codelength = /^\d{6}$/

    input.addEventListener('keyup', () => {
        if (input.value.match(codelength)) {
            $.ajax({
                type: "GET",
                url: "api.zippopotam.us/MY/01000" + input.value,

                success: (response) => {
                    info.innerHTML = (response[0].PostOffice[0].Name);
                }
            });

            
        }

        else {
            indicator.classList.add('ri-close-circle-fill');
            indicator.classList.remove('ri-checkbox-circle-fill');
            info.innerHTML = "Type valid zipcode";
        }

    }); */
function State(){
    
    if(document.getElementById("postcode"). value == "35000")
    {
        document.getElementById("state").value = "Perak";
    }

    else if(document.getElementById("postcode"). value == "50000"){
        document.getElementById("state").value = "Kuala Lumpur";
    }

    else if(document.getElementById("postcode"). value == "80000"){
        document.getElementById("state").value = "Johor";
    }
}

 

$(document).ready(function () {
    $("landing").submit(function (event) {
      var form = {
        name: $("#name").val(),
        dob: $("#DOB").val(),
        address: $("#address").val(),
        postcode: $("#postcode").val(),
        state: $("#state").val(),
      };

    $.ajax({
        url: "info.php",
        type: "POST",
        dataType: "json",
        data: form,
        encode: true,
    }).done(function (data){
        console.log(data);

    });
    event.preventDefault();
});
});