import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPlaylist = (props) => (
  <ContentLoader 
    speed={2}
    width={1107}
    height={152}
    viewBox="0 0 1107 152"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="441" y="24" rx="0" ry="0" width="2" height="8" /> 
    <rect x="43" y="117" rx="0" ry="0" width="0" height="1" /> 
    <rect x="6" y="0" rx="0" ry="0" width="250" height="150" />
  </ContentLoader>
)

export default SkeletonPlaylist