import {definePlugin} from "@expressive-code/core";
import type {Element} from "hast";

export function pluginCustomCopyButton() {
    return definePlugin({
        name: "Custom Copy Button",
        hooks: {
            postprocessRenderedBlock: (context) => {
                function traverse(node: Element) {
                    if (node.type === "element" && node.tagName === "pre") {
                        processCodeBlock(node);
                        return;
                    }
                    if (node.children) {
                        for (const child of node.children) {
                            if (child.type === "element") traverse(child);
                        }
                    }
                }

                function processCodeBlock(node: Element) {
                    const copyButton = {
                        type: "element" as const,
                        tagName: "button",
                        properties: {
                            className: ["copy-btn"],
                            "aria-label": "Copy code",
                        },
                        children: [
                            {
                                type: "element" as const,
                                tagName: "div",
                                properties: {
                                    className: ["copy-btn-icon"],
                                },
                                children: [
                                    {
                                        type: "element" as const,
                                        tagName: "svg",
                                        properties: {
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: ["copy-btn-icon", "copy-icon"],
                                        },
                                        children: [
                                            {
                                                type: "element" as const,
                                                tagName: "path",
                                                properties: {
                                                    d: "M4 2h11v2H6v13H4zm4 4h12v16H8zm2 2v12h8V8z",
                                                },
                                                children: [],
                                            },
                                        ],
                                    },
                                    {
                                        type: "element" as const,
                                        tagName: "svg",
                                        properties: {
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: ["copy-btn-icon", "success-icon"],
                                        },
                                        children: [
                                            {
                                                type: "element" as const,
                                                tagName: "path",
                                                properties: {
                                                    d: "M18 6h2v2h-2zm-2 4V8h2v2zm-2 2v-2h2v2zm-2 2h2v-2h-2zm-2 2h2v-2h-2zm-2 0v2h2v-2zm-2-2h2v2H6zm0 0H4v-2h2z",
                                                },
                                                children: [],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    } as Element;

                    if (!node.children) {
                        node.children = [];
                    }
                    node.children.push(copyButton);
                }

                traverse(context.renderData.blockAst);
            },
        },
    });
}
