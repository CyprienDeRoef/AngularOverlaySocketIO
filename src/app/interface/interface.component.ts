import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  public champions = [
    { name: "Aatrox" },
    { name: "Ahri" },
    { name: "Akali" },
    { name: "Alistar" },
    { name: "Amumu" },
    { name: "Anivia" },
    { name: "Annie" },
    { name: "Ashe" },
    { name: "Aurelion Sol" },
    { name: "Azir" },
    { name: "Bard" },
    { name: "Blitzcrank" },
    { name: "Brand" },
    { name: "Braum" },
    { name: "Caitlyn" },
    { name: "Camille" },
    { name: "Cassiopeia" },
    { name: "Cho'Gath" },
    { name: "Corki" },
    { name: "Darius" },
    { name: "Diana" },
    { name: "Dr.Mundo" },
    { name: "Draven" },
    { name: "Ekko" },
    { name: "Elise" },
    { name: "Evelynn" },
    { name: "Ezreal" },
    { name: "Fiddlesticks" },
    { name: "Fiora" },
    { name: "Fizz" },
    { name: "Galio" },
    { name: "Gangplank" },
    { name: "Garen" },
    { name: "Gnar" },
    { name: "Gragas" },
    { name: "Graves" },
    { name: "Hecarim" },
    { name: "Heimerdinger" },
    { name: "Illaoi" },
    { name: "Irelia" },
    { name: "Ivern" },
    { name: "Janna" },
    { name: "Jarvan IV" },
    { name: "Jax" },
    { name: "Jayce" },
    { name: "Jhin" },
    { name: "Jinx" },
    { name: "Kai'Sa" },
    { name: "Kalista" },
    { name: "Karma" },
    { name: "Karthus" },
    { name: "Kassadin" },
    { name: "Katarina" },
    { name: "Kayle" },
    { name: "Kayn" },
    { name: "Kennen" },
    { name: "Kha'Zix" },
    { name: "Kindred" },
    { name: "Kled" },
    { name: "Kog'Maw" },
    { name: "LeBlanc" },
    { name: "Lee Sin" },
    { name: "Leona" },
    { name: "Lissandra" },
    { name: "Lucian" },
    { name: "Lulu" },
    { name: "Lux" },
    { name: "Malphite" },
    { name: "Malzahar" },
    { name: "Maokai" },
    { name: "Maître Yi" },
    { name: "Miss Fortune" },
    { name: "Mordekaiser" },
    { name: "Morgana" },
    { name: "Nami" },
    { name: "Nasus" },
    { name: "Nautilus" },
    { name: "Neeko" },
    { name: "Nidalee" },
    { name: "Nocturne" },
    { name: "Nunu" },
    { name: "Olaf" },
    { name: "Orianna" },
    { name: "Ornn" },
    { name: "Pantheon" },
    { name: "Poppy" },
    { name: "Pyke" },
    { name: "Qiyana" },
    { name: "Quinn" },
    { name: "Rakan" },
    { name: "Rammus" },
    { name: "Rek'Sai" },
    { name: "Renekton" },
    { name: "Rengar" },
    { name: "Riven" },
    { name: "Rumble" },
    { name: "Ryze" },
    { name: "Sejuani" },
    { name: "Shaco" },
    { name: "Shen" },
    { name: "Shyvana" },
    { name: "Singed" },
    { name: "Sion" },
    { name: "Sivir" },
    { name: "Skarner" },
    { name: "Sona" },
    { name: "Soraka" },
    { name: "Swain" },
    { name: "Sylas" },
    { name: "Syndra" },
    { name: "Tahm Kench" },
    { name: "Taliyah" },
    { name: "Talon" },
    { name: "Taric" },
    { name: "Teemo" },
    { name: "Thresh" },
    { name: "Tristana" },
    { name: "Trundle" },
    { name: "Tryndamere" },
    { name: "Twisted Fate" },
    { name: "Twitch" },
    { name: "Udyr" },
    { name: "Urgot" },
    { name: "Varus" },
    { name: "Vayne" },
    { name: "Veigar" },
    { name: "Vel'Koz" },
    { name: "Vi" },
    { name: "Viktor" },
    { name: "Vladimir" },
    { name: "Volibear" },
    { name: "Warwick" },
    { name: "Wukong" },
    { name: "Xayah" },
    { name: "Xerath" },
    { name: "Xin Zhao" },
    { name: "Yasuo" },
    { name: "Yorick" },
    { name: "Yuumi" },
    { name: "Zac" },
    { name: "Zed" },
    { name: "Ziggs" },
    { name: "Zilean" },
    { name: "Zoé" },
    { name: "Zyra" }
  ];

  public spells = [
    { name: "Barrier" },
    { name: "Boost" },
    { name: "Dot" },
    { name: "Exhaust" },
    { name: "Flash" },
    { name: "Haste" },
    { name: "Heal" },
    { name: "Mana" },
    { name: "Smite" },
    { name: "Teleport" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
