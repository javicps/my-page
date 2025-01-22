import { PAGE_MODE } from './PageMode'

export type PageMode = (typeof PAGE_MODE)[keyof typeof PAGE_MODE]

export interface FooterProps {
  pageMode: PAGE_MODE
  togglePageMode: () => void
}
