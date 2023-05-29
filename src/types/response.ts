import IArtwork from "./artwork";

export default interface IResponse {
  config: {
    iiif_url: string
  },
  data: IArtwork[] | IArtwork,
  info: Object,
  pagination: Object
}