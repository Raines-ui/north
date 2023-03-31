/*
 * @Author: north 2445951561@qq.com
 * @Date: 2023-02-17 09:53:46
 * @LastEditors: north 2445951561@qq.com
 * @LastEditTime: 2023-03-28 16:41:29
 * @FilePath: \north\north-admin\src\vite-env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  import type { DialogApiInjection } from "naive-ui/lib/dialog/src/DialogProvider";
  import type { MessageApiInjection } from "naive-ui/lib/message/src/MessageProvider";
  import type { NotificationApiInjection } from "naive-ui/lib/notification/src/NotificationProvider";
  import type { LoadingBarInst } from "naive-ui/lib/loading-bar/src/LoadingBarProvider";
  const vueComponent: DefineComponent<{}, {}, any>;
  export default vueComponent;
}

declare interface Window {
  $message: MessageApiInjection;
  $dialog: DialogApiInjection;
  $notification: NotificationApiInjection;
  $loadingBar: LoadingBarInst;
}
