export interface IMessage {
  id?: string
  name?: string
  content?: string
  createTime?: string
}
export interface IQuery {
  page: number
  size: number
}
export interface IRefData {
  messageList: Array<IMessage>
  total: number
  listQuery: IQuery
  loading: boolean
  handleDropDownShow: boolean
}