import CoverImage from './cover-image'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function PostHeader({ title, coverImage, date, artist, category } : {
  title: string
  coverImage: string
  date: string
  artist: string
  category: []
}) {
  return (
    <>
      <div className="album-page-header">
        <CoverImage title={title} url={coverImage} height="400" width="400" className="album-page-image" />
        <div className="album-page-info">
          <h2>{monthNames[new Date(date).getUTCMonth()]}</h2>
          <h1>{title} ({date})</h1>
          <p className="album-page-subtitle">{artist}</p>
          <ul className="music-labels">
            {category?.map((item: string) => <li className="category" key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </>
  )
}