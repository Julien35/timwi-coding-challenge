import { AxiosInstance } from "axios";
import Api from "@/apis/api";
import { data } from "@/apis/mockData/albums";
import { Item } from "@/models/Item";

class SpotifyService {
  constructor(private api: AxiosInstance) {}

  //TODO: Brancher api spotify
  // "https://api.spotify.com/v1/search?q=pink%20floyd&type=track%2Cartist" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQCrD2BowyGwxdGu-DamdWkZZdgsIZrXOnCpUznxuGt_CknIUK6jU1VPkUakdP2EHz_ocjqmFeaTndIH8asGS0zrtgB3au_Stq5r4qVXsJXzUpB6jeZCE6c1YQR3ZCwA6G_hhb4vXUemruNLcVhkfacN5CUbKjG3M40"
  public async search(album: string): Promise<Item[]> {
    return data.items.filter((item: Item) => {
      return item.title.toLocaleLowerCase().includes(album.toLocaleLowerCase());
    });

    // return this.api
    //   .get("/search", {
    //     params: {
    //       q: item,
    //       type: "artist",
    //     },
    //   })
    //   .then(this.response)
    //   .catch(() => []);
  }

  // private response(response: AxiosResponse) {
  //   console.log(response);
  //   return response;
  // }
}

export default new SpotifyService(Api);
