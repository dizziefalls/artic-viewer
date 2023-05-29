import IArtwork from "../types/artwork";

export default function artworkMapper(data: any): IArtwork {
  const formattedArtwork: IArtwork = data.map((item:any) => {
    return {
      id: item.id,
      location: item.api_link,
      title: item.title, 
      date: item.date_display, //date_display
      artist: item.artist_display, //artist_display
      artistIds: item.artist_ids, //artist_ids
      artistTitles: item.artist_titles, //artist_titles
      placeOfOrigin: item.place_of_origin, //place_of_origin
      dimensions: item.dimensions,
      medium: item.medium_display, //medium_display
      onView: item.is_on_view, //is_on_view
      department: item.department_title, //department_title
      subjectIds: item.subject_ids, //subject_ids
      subjectTitles: item.subject_titles, //subject_titles
    }
  })
  return formattedArtwork
}