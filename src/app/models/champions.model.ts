export interface ChampionDetails {
  id: string;
  name: string;
  title: string;
  lore?: string;
  blurb?: string;
  tags?: Array<string>;
  images: {
    splash: string;
    icon: string;
    loading: string;
  };
  stats: ChampionStats;
  skins?: Array<ChampionSkins>;
  spells?: Array<ChampionSpell>;
  passive?: ChampionPassive;
}

export interface ChampionSkins {
  id: string;
  name: string;
  splash: string;
  loading: string;
}

export interface ChampionSpell {
  id: string;
  name: string;
  description: string;
  image: {
    full: string;
    sprite: string;
  };
}

export interface ChampionPassive {
  name: string;
  description: string;
  image: {
    full: string;
    sprite: string;
  };
}

export interface ChampionStats{
  hp:number;
  armor: number;
}

export interface ChampionAction {
  label: string;
  icon: string;
  iconColor?: string;
  callback: (item: ChampionDetails) => void;
}
