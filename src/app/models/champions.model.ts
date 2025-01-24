export interface ChampionDetails {
  id: string;
  name: string;
  title: string;
  lore?: string;
  blurb: string;
  tags?: Array<string>
  images: {
    splash: string;
    icon: string;
    loading: string;
  };
  skins?: Array<{
    id: string;
    name: string;
    splash: string;
    loading: string;
  }>;
  spells?: Array<{
    id: string;
    name: string;
    description: string;
    image: {
      full: string
      sprite: string
    }
  }>,
  passive?: {
    name: string;
    description: string;
    image: {
      full: string
      sprite: string
    }
  }
}
