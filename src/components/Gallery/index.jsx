import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-component';
import { Search } from '@material-ui/icons'
import "./index.less"
import Zmage from 'react-zmage'

const columnWidth = 244 // image width + 8px(margin)
const masonryOptions = {
  transitionDuration: 500,
  columnWidth,
};

const Gallery = props => {
  const [imgsStatus, setImgsStatus] = useState([])
  const [paddingLeft, setPaddingLeft] = useState(0)
  const { imgs, setGlobalLoading, handleSearch, setLoading } = props

  const handleImagesLoaded = (e) => {
    if (e.images.length === imgs.length && imgsStatus.some(v => !v)) {
      setGlobalLoading(false)
      setLoading(false)
      setImgsStatus(v => v.map(item => true))
    }
  }
  // const handleLayoutComplete = (e) => {
  //   console.log("layout")
  // }
  useEffect(() => {
    if (imgs.length > imgsStatus.length) {
      const copyImgsStatus = [...imgsStatus]
      while (copyImgsStatus.length < imgs.length) {
        copyImgsStatus.push(false)
      }
      setImgsStatus(copyImgsStatus)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgs])
  useEffect(() => {
    const cb = () => {
      if (window.innerWidth <= 1024) {
        setPaddingLeft(window.innerWidth % columnWidth / 2)
      } else {
        setPaddingLeft(0)
      }
    }
    window.addEventListener("resize", cb)
    cb()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Masonry
      className={'my-gallery'} // default ''
      elementType={'ul'} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      // imagesLoadedOptions={imagesLoadedOptions} // default {}
      onImagesLoaded={handleImagesLoaded}
      // onLayoutComplete={handleLayoutComplete}
      style={{ paddingLeft: paddingLeft }}
    >
      {
        imgs.map((v, i) => {
          return (
            <li className="image-element-class" style={{ visibility: imgsStatus[i] ? "inherit" : "hidden" }} key={`${v.src}${i}`}>
              <Zmage backdrop="rgba(0,0,0,.8)" src={v.src} draggable={false} alt="result" />
              <div className="desc">
                <p>{v.distance}</p>
                <Search color="primary" onClick={() => { handleSearch(v.src) }}></Search>
              </div>
            </li>
          );
        })
      }
    </Masonry>
  );
}


export default Gallery;
