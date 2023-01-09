import {Component} from '@angular/core';
import {WeaponChoice} from '../../../../datatypes/RPS/weaponChoice';
import {MinigameDataService} from '../../../../services/minigameData.service';

@Component({
  selector: 'app-rps-arena',
  templateUrl: './rps-arena.page.html',
  styleUrls: ['./rps-arena.page.scss'],
})
export class RpsArenaPage {

  choicesAi: [{'schaar'},{'steen'},{'papier'}];

  constructor(public minigameData: MinigameDataService) {
    this.startGame();
  }
  startGame()
  {
    //als modus vs speler is
    //anders
  }
  chosenWeapon(choice) {
    switch (choice) {
      case '0':
        return 'rock';
      case '1':
        return 'paper';
      case '2':
        return 'scissors';
      case '3':
        return 'pistol';
    }
  }

  //methode vergelijk keuzes
/*   calculateWinner(playerOneChoice: WeaponChoice, playerTwoChoice: WeaponChoice): WeaponChoice {
    if (playerOneChoice.move == playerTwoChoice.move)
      return { player: "Neither", move: playerOneChoice.move }

    switch (playerOneChoice.move) {
      case WeaponChoice.Rock:
        if (playerTwoChoice.move === WeaponChoice.Paper) return playerTwoChoice;
        break;
      case WeaponChoice.Paper:
        if (playerTwoChoice.move === WeaponChoice.Scissors) return playerTwoChoice;
        break;
      case WeaponChoice.Scissors:
        if (playerTwoChoice.move === WeaponChoice.Rock) return playerTwoChoice;
        break;
      default:
        return playerOneChoice
    }
    return playerOneChoice
  }*/
  //Toonwinnaar methode
  //maakscore aan methode
  //update score methode
  // indien ze al bestaat, update score anders zet ze in de databank

  //toon pauze menu (service)
}
