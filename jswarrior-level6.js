jsWarrior.turn = function(warrior) {
    if (warrior.direction != "forward") {
      warrior.direction = "backward"
    } 

    if (warrior.check(warrior.direction) == "diamond") {
      warrior.collect(warrior.direction)
      warrior.direction = "forward"
    } else if(warrior.check() == "enemy") {
      warrior.attack();
    } else if (warrior.check() == "diamond") {
      warrior.collect()
    } else {
      if(warrior.getHealth() < 20) {
        if (warrior.previousHealth > warrior.getHealth()) {
          if (warrior.getHealth() > 10) {
            warrior.walk("forward")
          } else {
            warrior.walk("backward")
          }
        } else {
            warrior.rest()
        }
      } else {
        warrior.walk(warrior.direction) 
      }
    }
    warrior.previousHealth = warrior.getHealth()
  }