declare const _default: import("vue").DefineComponent<{
    user: {
        type: ObjectConstructor;
    };
}, any, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("login" | "logout" | "createAccount")[], "login" | "logout" | "createAccount", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    user: {
        type: ObjectConstructor;
    };
}>> & {
    onLogin?: (...args: any[]) => any;
    onLogout?: (...args: any[]) => any;
    onCreateAccount?: (...args: any[]) => any;
}, {}>;
export default _default;
