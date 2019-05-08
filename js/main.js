var lastPage = 3;
var anchors = ['Home', 'Videos', 'Projects'];
var firstPage = 1;
	$(document).ready(function() {
		$('#fullpage').fullpage({
			anchors: anchors,
			sectionsColor: ['#101b27', '#2b2d32', '#101b27'],
			navigation: true,
			navigationPosition: 'left',
			navigationTooltips: anchors,
			afterLoad: function(anchorLink, index){
				console.log(anchorLink);
				var prevPage = index -1;
				var nextPage = index +1;
				var currentPage = index;

				$("#arrow_up").attr('href','#' + anchors[prevPage-1]);
				$("#arrow_down").attr('href','#' + anchors[nextPage-1]);

				if(prevPage >= firstPage) {
				$('#up').css('display', 'inline');
				} else {
					$('#up').css('display', 'none');
				}


				if(currentPage != lastPage ) {
				$('#down').css('display', 'inline');

			} else {
				$('#down').css('display', 'none');
				$('#up').css('display', 'inline');

			}
			},

		});
	});
