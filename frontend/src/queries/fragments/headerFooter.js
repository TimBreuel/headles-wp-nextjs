const HeaderFooter = `
header: getHeader {
  favicon
  siteLogoUrl
  siteTagLine
  siteTitle
}

headerMenus: menuItems(
  where: { location: HCMS_MENU_HEADER, parentId: "0" }
) {
  edges {
    node {
      id
      label
      url
      path
      childItems {
        edges {
          node {
            id
            label
            url
            path
          }
        }
      }
    }
  }
}
footerMenus: menuItems(
  where: { location: HCMS_MENU_FOOTER, parentId: "0" }
) {
  edges {
    node {
      id
      label
      url
      path
      childItems {
        edges {
          node {
            ...MenuFragment
          }
        }
      }
    }
  }
}
footer: getFooter {
  copyrightText
  sidebarOne
  sidebarTwo
  socialLinks {
    iconName
    iconUrl
  }
}
`;

export default HeaderFooter;
