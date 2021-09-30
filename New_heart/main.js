//here

function addRates(value) { //despues de limpiar, pongo los active nuevos
    for (var i = 1; i <= value; i++) {
        document.getElementById("star" + i).classList.add("active");

    }
}


function rate(value) {
    alert('Hola alert!' + value);
    cleanRate();
    addRates(value);



}


function cleanRate() {
    for (var i = 1; i <= 5; i++) {

        document.getElementById("star" + i).classList.remove("active");
    }
}

/*
 hover: function(){
            var el = $(this),
                stars = $('a', el);
            
            stars.bind('mouseenter', function(e){
                // add tmp class when mouse enter
                $(this)
                    .addClass('tmp_fs')
                    .prevAll()
                    .addClass('tmp_fs');
                
                $(this).nextAll()
                    .addClass('tmp_es');
            });

            */