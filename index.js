
function handleSubmit(){
    $('#dog_form').submit(function(){
        event.preventDefault();
        let dog_num = $('#dog_number').val();
        let select = $('#select_breed').val();
        console.log($('#dog_number').val());
        fetch(`https://dog.ceo/api/breed/${select}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayImages(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
        
    });
}

function displayImages(responseJson){
    let message = responseJson.message;
    let emptyArray = [];
    console.log(message)
    console.log(message[1]);
    console.log(emptyArray);
     
        emptyArray.push(`<img src='${message}'>`);
        $('#landing').html(emptyArray);
}













function loadscript(){
    handleSubmit();
}




$(loadscript);