export default interface IArtwork {
  id: number,
  imageId: string,
  location: string, //api_link
  title: string, 
  date: string, //date_display
  artist: string, //artist_display
  artistIds: number[], //artist_ids
  artistTitles: string[], //artist_titles
  placeOfOrigin: string, //place_of_origin
  dimensions: string,
  medium: string, //medium_display
  onView: boolean, //is_on_view
  department: string, //department_title
  subjectIds: number[], //subject_ids
  subjectTitles: string[], //subject_titles
}

// auto cast via map
// const formattedArtwork: IArtwork => response.map(item => {
//  id: item.id,
//  location: item.api_link,
//  ...
// })

// may still break. to look into.