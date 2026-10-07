import { PAGE_MODE } from './PageMode'

export type FooterProps = {
  pageMode: PAGE_MODE
  togglePageMode: () => void
}

export type WrittenTextProps = {
  title: string
  content: string
}
