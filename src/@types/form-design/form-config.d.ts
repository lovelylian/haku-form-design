import { FormFooterConfig } from "./form-footer-config";

/** 表单基本配置 */
export declare class FormConfig {
    /** 表单唯一编号 */
    id: string;
    /** 表单组件库 */
    formComponentLib: string;
    /** 面板标题 */
    canvasTitle: string;
    /** 表单标题 */
    formTitle: string;
    /** 表单名称 */
    formName: string;
    /** 表单宽度 */
    width: number;
    /** 表单高度 */
    height: number;
    /** 表单头部高度 */
    headerHeight: number;
    /** 设备类型 */
    deviceId: string;
    /** 底部按钮配置 */
    footer: FormFooterConfig;
    /** 表单当前控件索引（自增） */
    controlIndex: number;
    /** 表单主题 */
    formTheme: string;
}