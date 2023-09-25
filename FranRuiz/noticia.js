$(document).ready(function () {

    $(document).on('click', '#btn', () => {

        var URL = $('#url').val();
        var blanco = (' ');
        var num1 = numerosAleatorios();
        var num2 = numerosAleatorios();
        var resultado = $('#result').val();
        clearFields();

        for (url of URL) {

            if (url == blanco) {

                $('#url').addClass('is-invalid')
            }
        }

        if (resultado != 7) {

            $('#result').addClass('is-invalid')
        }

    });

    function numerosAleatorios(min, max) {

        return Math.random() * (max - min) + min;
    }

    function clearFields() {
        $('.form-control').removeClass('is-invalid');
    }
});