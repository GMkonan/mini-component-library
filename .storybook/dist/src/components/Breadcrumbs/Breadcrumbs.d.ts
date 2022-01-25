/// <reference types="react" />
declare const Breadcrumbs: {
    ({ children }: {
        children: any;
    }): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {};
    };
};
declare const Crumb: {
    ({ href, children }: {
        href: any;
        children: any;
    }): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            href: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export { Breadcrumbs, Crumb };
