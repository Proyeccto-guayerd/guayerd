 function toggleInput() {
      var selectElement = document.getElementById("00NDn00000buKqS");
      var inputElement = document.getElementById("00NDn00000bu11f");

      if (selectElement.value === "Si") {
        inputElement.disabled = false;
      } else {
        inputElement.disabled = true;
        inputElement.value = "";
      }
    }
 $(function() {
    // Inicializar el Datepicker
    $("#00NDn00000bu5gV").datepicker({
      dateFormat: "dd/mm/yy" // Configurar el formato de fecha
    });
  });

  $(document).ready(function() {
            // Ocultar los campos iniciales al cargar la página
            $(".payment-fields").hide();

            // Manejar el evento change del primer select
            $("#00NDn00000bu0nE").change(function() {
                var selectedOption = $(this).val();

                // Si la opción "Dinero" está seleccionada, mostrar los campos de pago
                if (selectedOption === "Dinero") {
                    $(".payment-fields").show();
                } else {
                    $(".payment-fields").hide();
                }
            });
        });

    $(document).ready(function() {

       $(".payment-fields-hide").hide();

    $('#00NDn00000bu0wQ').change(function() {
      var selectedOption = $(this).val();
      if (selectedOption === '' || selectedOption === 'Cheque' || selectedOption === 'Otro') {
        $('.payment-fields-hide').hide();
      } else {
        $('.payment-fields-hide').show();
      }

    });
  });