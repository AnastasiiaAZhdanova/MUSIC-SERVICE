import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={1107}
    height={51}
    viewBox="0 0 1107 51"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="51" height="51" /> 
    <rect x="67" y="16" rx="0" ry="0" width="356" height="19" /> 
    <rect x="442" y="16" rx="0" ry="0" width="271" height="19" />
    <rect x="732" y="16" rx="0" ry="0" width="305" height="19" />
  </ContentLoader>
)

export default Skeleton