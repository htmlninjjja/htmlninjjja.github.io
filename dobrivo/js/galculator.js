
/////////////////////
// Валидация формы //
/////////////////////

$( "#frm_profit" ).validate({
	rules: {
		frm_urojay: {
		required: true
		},
	frm_udobren: {
		required: true,
		minlength: 3
		},
	frm_ploshad: {
		required: true
		}
	},
	messages: {
	    frm_urojay: {
	    required: "Пожалуйста, введите урожайность"
	    },
	    frm_udobren: {
	    required: "Сколько стоят удобрения?",
	    minlength: "Что-то подозрительно дёшево..."
	    },
	    frm_ploshad: {
	    required: "Пожалуйста, введите посевную площадь"
	    }
	}
});


///////////////////////////////
// Расчёт прибыли (условный) //
///////////////////////////////

// Выводим результате по умолчанию при загрузке страницы
window.onload = function() {	
        var value = 4220;
		$("#frm_resultat").html(value);
};


// Считаем...
$(document).ready(function() {

    $("#frm_kultura,#frm_urojay,#frm_udobren,#frm_ploshad").on("change", function() {

        var frm_kultura = $("#frm_kultura").val();
        var frm_urojay = $("#frm_urojay").val();
        var frm_udobren = $("#frm_udobren").val();
        var frm_ploshad = $("#frm_ploshad").val();

        var value = Number(frm_urojay) + Number(frm_udobren) + Number(frm_ploshad) + Number(frm_kultura);

        //Если заполнены все поля - вывод результата, если нет - знака вопроса
        if (frm_urojay>0 && frm_udobren>0 && frm_ploshad>0) {
		  $("#frm_resultat").html(value);
		} else {
		  var value = "?";
		  $("#frm_resultat").html(value);
		}
    });
});

