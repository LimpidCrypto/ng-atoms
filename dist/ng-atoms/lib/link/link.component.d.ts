import * as i0 from "@angular/core";
export type LinkTarget = '_blank' | '_self' | '_parent' | '_top' | string;
export declare class LinkComponent {
    href: string;
    target: LinkTarget;
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LinkComponent, "link-atom", never, { "href": { "alias": "href"; "required": false; }; "target": { "alias": "target"; "required": false; }; }, {}, never, ["*"], false, never>;
}
