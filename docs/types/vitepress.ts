export interface NavItemWithLink {
  text: string
  link: string
  activeMatch?: string
}

export interface NavItemWithChildren {
  text?: string
  items: NavItemWithLink[]
  activeMatch?: string
}

export type NavItem = NavItemWithLink | NavItemWithChildren

export interface SidebarMulti {
  [path: string]: SidebarGroup[]
}

export interface SidebarGroup {
  text: string
  items: SidebarItem[]
  collapsible?: boolean
  collapsed?: boolean
}

export interface SidebarItem {
  text: string
  link: string
}

export type Sidebar = SidebarGroup[] | SidebarMulti

export type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'mastodon'
  | 'slack'
  | 'twitter'
  | 'youtube'
  | { svg: string }

export interface SocialLink {
  icon: SocialLinkIcon
  link: string
}
