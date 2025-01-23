export interface ChampionSummary {
  id: string;
  name: string;
  title: string;
  blurb: string;
  images: {
    splash: string;
    icon: string;
    loading: string;
  };
}
export interface ChampionDetails {
  id: string;
  name: string;
  title: string;
  lore: string;
  images: {
    splash: string;
    icon: string;
    loading: string;
  };
  skins: Array<{
    id: string;
    name: string;
    splash: string;
    loading: string;
  }>;
}
