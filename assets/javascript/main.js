$(document).ready(function() {
	var myChar, enemyChar, charAvail, numEnemies;
	function startGame() {
		myChar;
		enemyChar;

		choice = [];
		charAvail = [ {
			id: 0,
			name: "Darth-Maul",
			pic: 'assets/images/darthmaul.jpeg',
			hitPoints: 150,
			attackPower: 5
		}, {
			id: 1,
			name: "Darth-Sidious",
			pic: 'assets/images/darthsidious.jpg',
			hitPoints: 100,
			attackPower: 25 		
		}, {
			id: 2,
			name: "Luke",
			pic: 'assets/images/luke.jpg',
			hitPoints: 120,
			attackPower: 19 
		}, {
			id: 3,
			name: "Obi-Wan",
			pic: 'assets/images/obi-wan.jpg',
			hitPoints: 140,
			attackPower: 9 
		} ];

		pickCharacter = false;

		for(var i = 0; i< charAvail.length; i++) {
			choice += "<div id=" + charAvail[i].id + " class='btn character text-center' value=" + charAvail[i].name +
			"><img class='houses' src=" + charAvail[i].pic + " alt=" + charAvail[i].name + "><br> HitPoints: " + charAvail[i].hitPoints +
			"<br> AttackPoints: " + charAvail[i].attackPower + " </div>";
		}
		$("#pick").html(choice);
		$("#prompt").html("Click to choose your character");
		characterClick();
	}

	function characterClick() {
		$('.character').on("click", function() {
			if(!pickCharacter) {
				myChar = $(this).attr('id');
				console.log(this);
			}
		});
	}
	startGame();
	
});

