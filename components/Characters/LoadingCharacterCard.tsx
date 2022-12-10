import ContentLoader from "react-content-loader";

interface IContentLoaderProps {
  props?: any;
  count: number;
}
const LoadingCharacterCard = ({props, count}: IContentLoaderProps) => {
  let index = 0;
  const components = []
  while (index < count) {
    components.push(
      <ContentLoader
      key={`cl-${index}`}
      className={`flex m-4 shrink-0 w-48 h-96 rounded-lg overflow-hidden`} 
      speed={2}
      width={200}
      height={400}
      viewBox="0 0 200 400"
      backgroundColor="#0f172a"
      foregroundColor="#7c8a9c"
      opacity={1 - index * 0.2}
      {...props}
      >
        <rect x="2" y="253" rx="3" ry="3" width="185" height="21" /> 
        <rect x="-45" y="-2" rx="0" ry="0" width="231" height="241" /> 
        <rect x="2" y="283" rx="0" ry="0" width="110" height="12" /> 
        <rect x="172" y="309" rx="0" ry="0" width="0" height="1" /> 
        <rect x="2" y="303" rx="0" ry="0" width="109" height="11" />
      </ContentLoader>
    )
    index ++
  }

  return <div className="flex flex-wrap">
    {components}
  </div>
}

export default LoadingCharacterCard