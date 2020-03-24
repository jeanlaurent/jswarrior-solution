jsWarrior.turn = function(warrior) {
	if (warrior.check() == "enemy") {
	  warrior.attack()
	} else {
	  if (warrior.getHealth() < 20) {
		if (warrior.previousHealth > warrior.getHealth()) {
		  warrior.walk()
		} else {
		  warrior.rest()
		}
	  } else {
		warrior.walk("forward")
	  }
	}
	warrior.previousHealth = warrior.getHealth()
  }