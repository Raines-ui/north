export interface IMessage {
  id?: string
  name?: string
  content?: string
  createTime?: string
}
export interface IQuery {
  page: number
  limit: number
}
export interface IRefData {
  messageList: Array<IMessage>
  pageCount: number,
  total: number
  listQuery: IQuery
  loading: boolean
  handleDropDownShow: boolean
}