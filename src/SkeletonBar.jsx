import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonBar = (props) => (
  <ContentLoader 
    speed={5}
    width={1107}
    height={152}
    viewBox="0 0 1107 152"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="441" y="24" rx="0" ry="0" width="2" height="8" /> 
    <rect x="43" y="117" rx="0" ry="0" width="0" height="1" /> 
    <rect x="0" y="0" rx="0" ry="0" width="51" height="51" /> 
    <rect x="63" y="3" rx="0" ry="0" width="59" height="15" /> 
    <rect x="63" y="30" rx="0" ry="0" width="59" height="15" /> 
    <rect x="134" y="54" rx="0" ry="0" width="2" height="0" />
  </ContentLoader>
)

export default SkeletonBar
