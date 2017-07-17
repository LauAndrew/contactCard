$(document).ready(function(){
		$("form").submit(function(){
			return false;
		});


		$("button").click(function(){
			var firstName = $("#firstN").val();
			var lastName = $("#lastN").val();
			var description = $("textarea").val();

			$("#rightinfo").append("<div class ='card'><p>" + firstName + " " + lastName+"</p><p class = 'back'> " + description +"</p></div>");
			$("firstN").val("");
			$("lastN").val("");
			$("description").val("");

			$(".back").hide();

			});

			$(document).on('click', '.card', function(){
				$(this).children().toggle();


			});

});