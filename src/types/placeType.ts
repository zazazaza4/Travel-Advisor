import { ImageSourcePropType } from "react-native";

export interface PlaceType {
  location_id: string;
  name: string;
  latitude?: string;
  longitude?: string;
  num_reviews?: string;
  timezone?: string;
  location_string: string;
  photo: Photo;
  awards?: any[];
  doubleclick_zone: string;
  preferred_map_engine?: string;
  raw_ranking?: string;
  ranking_geo?: string;
  ranking_geo_id?: string;
  ranking_position?: string;
  ranking_denominator?: string;
  ranking_category?: string;
  ranking?: string;
  distance?: string;
  distance_string?: string;
  bearing?: string;
  rating?: string;
  is_closed?: boolean;
  open_now_text?: string;
  is_long_closed?: boolean;
  price_level?: string;
  description?: string;
  web_url?: string;
  write_review?: string;
  ancestors: any[];
  category?: any;
  subcategory?: any[];
  parent_display_name?: string;
  is_jfy_enabled?: boolean;
  nearest_metro_station?: any[];
  reviews?: any | undefined[];
  phone?: string;
  website?: string;
  address_obj?: any;
  address?: string;
  hours?: any;
  is_candidate_for_contact_info_suppression?: boolean;
  cuisine?: any[];
  dietary_restrictions?: any[];
  establishment_types?: any[];
  price?: string;
  ad_position?: string;
  ad_size?: string;
  detail?: string;
  page_type?: string;
  mob_ptype?: string;
  email?: string;
}

interface Photo {
  images: Images;
  is_blessed: boolean;
  uploaded_date: string;
  caption: string;
  id: string;
  helpful_votes: string;
  published_date: string;
  user: any;
}

interface Images {
  small: Image;
  thumbnail: Image;
  original: Image;
  large: Image;
  medium: Image;
}

interface Image {
  width: string;
  url: ImageSourcePropType;
  height: string;
}
