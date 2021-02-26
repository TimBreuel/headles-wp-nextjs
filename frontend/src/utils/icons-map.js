import * as SvgIconsComponent from "../components/icons";

const getIconComponentBySlug = (name) => {
  const ComponentsMap = {
    facebook: SvgIconsComponent.Facebook,
    twitter: SvgIconsComponent.Twitter,
    instagram: SvgIconsComponent.Instagram,
    youtube: SvgIconsComponent.Youtube,
  };
  if (name in ComponentsMap) {
    const IconComponent = ComponentsMap[name];
    return <IconComponent></IconComponent>;
  } else {
    return null;
  }
};

export default getIconComponentBySlug;
