import { PAGE_MODE } from './PageMode'

export type PageMode = (typeof PAGE_MODE)[keyof typeof PAGE_MODE]

export type FooterProps = {
  pageMode: PAGE_MODE
  togglePageMode: () => void
}

export type MenuProps = {
  currentMode: PAGE_MODE
}

export type WrittenTextProps = {
  title: string
  content: string
}
