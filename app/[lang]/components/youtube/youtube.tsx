import s from './youtube.module.css'

const Youtube = () => {
  return (
    <div className='ctn mb-8'>
      <h2>Latest on Youtube</h2>
      <div className={`${s.youtubebar} flex gap-4`}>
        <iframe width="360" height="215" src="https://www.youtube.com/embed/ocPlzTNsQ-o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="0"  allowFullScreen></iframe>
        <iframe width="360" height="215" src="https://www.youtube.com/embed/kvO2tMV8VRs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="0" allowFullScreen></iframe>
        <iframe width="360" height="215" src="https://www.youtube.com/embed/bA9xZyoXSYA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Youtube
